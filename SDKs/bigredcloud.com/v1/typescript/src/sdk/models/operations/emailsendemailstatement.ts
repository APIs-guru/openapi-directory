import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EmailSendEmailStatementRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.EmailStatementDto;
}


export class EmailSendEmailStatementResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  emailSendEmailStatement200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
