import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const AirtravelMultilegServerList = [
	"http://api.climatekuul.com:8000/footprint",
] as const;


export class AirtravelMultilegRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AirtravelMultilegRequest;
}


export class AirtravelMultilegResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
