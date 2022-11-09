import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomerDto } from "./customerdto";


export class BatchItemCustomerDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=item" })
  item?: CustomerDto;

  @Metadata({ data: "json, name=opCode" })
  opCode?: number;
}
