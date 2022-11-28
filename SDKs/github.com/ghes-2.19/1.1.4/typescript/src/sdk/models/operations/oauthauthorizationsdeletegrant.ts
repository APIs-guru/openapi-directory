import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OauthAuthorizationsDeleteGrantPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=grant_id" })
  grantId: number;
}


export class OauthAuthorizationsDeleteGrantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OauthAuthorizationsDeleteGrantPathParams;
}


export class OauthAuthorizationsDeleteGrantResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;
}
