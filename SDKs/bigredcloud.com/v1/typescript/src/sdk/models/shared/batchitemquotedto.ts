import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { QuoteDto } from "./quotedto";


export class BatchItemQuoteDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=item" })
  item?: QuoteDto;

  @Metadata({ data: "json, name=opCode" })
  opCode?: number;
}
