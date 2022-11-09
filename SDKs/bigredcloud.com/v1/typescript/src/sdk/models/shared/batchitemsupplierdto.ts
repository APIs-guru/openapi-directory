import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SupplierDto } from "./supplierdto";


export class BatchItemSupplierDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=item" })
  item?: SupplierDto;

  @Metadata({ data: "json, name=opCode" })
  opCode?: number;
}
