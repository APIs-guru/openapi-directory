import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QuoteDto } from "./quotedto";



export class BatchItemQuoteDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: QuoteDto;

  @SpeakeasyMetadata({ data: "json, name=opCode" })
  opCode?: number;
}
