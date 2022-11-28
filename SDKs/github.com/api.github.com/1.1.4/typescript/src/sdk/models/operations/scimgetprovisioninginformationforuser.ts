import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ScimGetProvisioningInformationForUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scim_user_id" })
  scimUserId: string;
}


export class ScimGetProvisioningInformationForUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ScimGetProvisioningInformationForUserPathParams;
}


export class ScimGetProvisioningInformationForUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  scimError?: shared.ScimError;

  @SpeakeasyMetadata()
  scimUser?: shared.ScimUser;
}
