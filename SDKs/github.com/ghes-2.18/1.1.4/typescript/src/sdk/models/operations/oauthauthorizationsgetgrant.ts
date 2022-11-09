import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OauthAuthorizationsGetGrantPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=grant_id" })
  grantId: number;
}


export class OauthAuthorizationsGetGrantRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OauthAuthorizationsGetGrantPathParams;
}


export class OauthAuthorizationsGetGrantResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  applicationGrant?: shared.ApplicationGrant;

  @Metadata()
  basicError?: shared.BasicError;
}
