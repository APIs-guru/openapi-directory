import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTokenHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetTokenRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetTokenHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetTokenRequest;
}


export class GetTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getToken?: shared.GetToken;
}
