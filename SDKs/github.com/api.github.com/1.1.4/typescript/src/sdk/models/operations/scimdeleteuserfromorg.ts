import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ScimDeleteUserFromOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scim_user_id" })
  scimUserId: string;
}


export class ScimDeleteUserFromOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ScimDeleteUserFromOrgPathParams;
}


export class ScimDeleteUserFromOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  scimError?: shared.ScimError;
}
