import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const AIRTRAVELMULTILEG_SERVERS = [
	"http://api.climatekuul.com:8000/footprint",
];



export class AirtravelMultilegRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AirtravelMultilegRequest;
}


export class AirtravelMultilegResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
