import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TranslateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class TranslateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.TranslateRequest;

  @Metadata()
  security: TranslateSecurity;
}


export class Translate400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: shared.Error[];
}


export class Translate500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: shared.Error[];
}


export class TranslateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  translateResponse?: shared.TranslateResponse;

  @Metadata()
  translate400ApplicationJsonObject?: Translate400ApplicationJson;

  @Metadata()
  translate500ApplicationJsonObject?: Translate500ApplicationJson;
}
