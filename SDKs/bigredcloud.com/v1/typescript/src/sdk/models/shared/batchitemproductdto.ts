import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductDto } from "./productdto";



export class BatchItemProductDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: ProductDto;

  @SpeakeasyMetadata({ data: "json, name=opCode" })
  opCode?: number;
}
