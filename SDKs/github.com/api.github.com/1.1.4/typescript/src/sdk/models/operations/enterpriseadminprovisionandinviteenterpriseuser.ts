import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnterpriseAdminProvisionAndInviteEnterpriseUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;
}


export class EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyEmails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=primary" })
  primary: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}


export class EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyGroups extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=familyName" })
  familyName: string;

  @SpeakeasyMetadata({ data: "json, name=givenName" })
  givenName: string;
}


export class EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=emails", elemType: EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyEmails })
  emails: EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyEmails[];

  @SpeakeasyMetadata({ data: "json, name=groups", elemType: EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyGroups })
  groups?: EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyGroups[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyName;

  @SpeakeasyMetadata({ data: "json, name=schemas" })
  schemas: string[];

  @SpeakeasyMetadata({ data: "json, name=userName" })
  userName: string;
}


export class EnterpriseAdminProvisionAndInviteEnterpriseUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnterpriseAdminProvisionAndInviteEnterpriseUserPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBody;
}


export class EnterpriseAdminProvisionAndInviteEnterpriseUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  scimEnterpriseUser?: shared.ScimEnterpriseUser;
}
