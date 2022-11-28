import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SupplierDto } from "./supplierdto";



export class BatchItemSupplierDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: SupplierDto;

  @SpeakeasyMetadata({ data: "json, name=opCode" })
  opCode?: number;
}
