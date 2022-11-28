import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomerDto } from "./customerdto";



export class BatchItemCustomerDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: CustomerDto;

  @SpeakeasyMetadata({ data: "json, name=opCode" })
  opCode?: number;
}
