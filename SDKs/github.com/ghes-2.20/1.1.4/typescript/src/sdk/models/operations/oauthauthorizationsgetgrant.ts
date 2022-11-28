import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OauthAuthorizationsGetGrantPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=grant_id" })
  grantId: number;
}


export class OauthAuthorizationsGetGrantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OauthAuthorizationsGetGrantPathParams;
}


export class OauthAuthorizationsGetGrantResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  applicationGrant?: shared.ApplicationGrant;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;
}
