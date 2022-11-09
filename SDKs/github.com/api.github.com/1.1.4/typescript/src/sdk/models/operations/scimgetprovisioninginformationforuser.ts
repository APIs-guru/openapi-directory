import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ScimGetProvisioningInformationForUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=scim_user_id" })
  scimUserId: string;
}


export class ScimGetProvisioningInformationForUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ScimGetProvisioningInformationForUserPathParams;
}


export class ScimGetProvisioningInformationForUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  scimError?: shared.ScimError;

  @Metadata()
  scimUser?: shared.ScimUser;
}
