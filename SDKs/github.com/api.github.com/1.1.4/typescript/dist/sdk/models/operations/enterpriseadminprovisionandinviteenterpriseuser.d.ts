import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminProvisionAndInviteEnterpriseUserPathParams extends SpeakeasyBase {
    enterprise: string;
}
export declare class EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyEmails extends SpeakeasyBase {
    primary: boolean;
    type: string;
    value: string;
}
export declare class EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyGroups extends SpeakeasyBase {
    value?: string;
}
export declare class EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyName extends SpeakeasyBase {
    familyName: string;
    givenName: string;
}
export declare class EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBody extends SpeakeasyBase {
    emails: EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyEmails[];
    groups?: EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyGroups[];
    name: EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyName;
    schemas: string[];
    userName: string;
}
export declare class EnterpriseAdminProvisionAndInviteEnterpriseUserRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminProvisionAndInviteEnterpriseUserPathParams;
    request?: EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBody;
}
export declare class EnterpriseAdminProvisionAndInviteEnterpriseUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    scimEnterpriseUser?: shared.ScimEnterpriseUser;
}
