import { SpeakeasyBase } from "../../../internal/utils";
export declare class EnterpriseAdminUpdateOrgNamePathParams extends SpeakeasyBase {
    org: string;
}
export declare class EnterpriseAdminUpdateOrgNameRequestBody extends SpeakeasyBase {
    login: string;
}
export declare class EnterpriseAdminUpdateOrgName202ApplicationJson extends SpeakeasyBase {
    message?: string;
    url?: string;
}
export declare class EnterpriseAdminUpdateOrgNameRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminUpdateOrgNamePathParams;
    request?: EnterpriseAdminUpdateOrgNameRequestBody;
}
export declare class EnterpriseAdminUpdateOrgNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    enterpriseAdminUpdateOrgName202ApplicationJsonObject?: EnterpriseAdminUpdateOrgName202ApplicationJson;
}
