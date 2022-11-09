import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProductDto } from "./productdto";


export class BatchItemProductDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=item" })
  item?: ProductDto;

  @Metadata({ data: "json, name=opCode" })
  opCode?: number;
}
