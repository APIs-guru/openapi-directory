import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ScimDeleteUserFromOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=scim_user_id" })
  scimUserId: string;
}


export class ScimDeleteUserFromOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ScimDeleteUserFromOrgPathParams;
}


export class ScimDeleteUserFromOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  scimError?: shared.ScimError;
}
