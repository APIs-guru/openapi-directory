import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminSetInformationForProvisionedEnterpriseUserPathParams extends SpeakeasyBase {
    enterprise: string;
    scimUserId: string;
}
export declare class EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyEmails extends SpeakeasyBase {
    primary: boolean;
    type: string;
    value: string;
}
export declare class EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyGroups extends SpeakeasyBase {
    value?: string;
}
export declare class EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyName extends SpeakeasyBase {
    familyName: string;
    givenName: string;
}
export declare class EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBody extends SpeakeasyBase {
    emails: EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyEmails[];
    groups?: EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyGroups[];
    name: EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyName;
    schemas: string[];
    userName: string;
}
export declare class EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminSetInformationForProvisionedEnterpriseUserPathParams;
    request?: EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBody;
}
export declare class EnterpriseAdminSetInformationForProvisionedEnterpriseUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    scimEnterpriseUser?: shared.ScimEnterpriseUser;
}
