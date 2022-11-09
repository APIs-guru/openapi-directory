import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OauthAuthorizationsDeleteGrantPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=grant_id" })
  grantId: number;
}


export class OauthAuthorizationsDeleteGrantRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OauthAuthorizationsDeleteGrantPathParams;
}


export class OauthAuthorizationsDeleteGrantResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;
}
