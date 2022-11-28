import { SpeakeasyBase } from "../../../internal/utils";
export declare class EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams extends SpeakeasyBase {
    enterprise: string;
    runnerGroupId: number;
}
export declare class EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestBody extends SpeakeasyBase {
    selectedOrganizationIds: number[];
}
export declare class EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams;
    request?: EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestBody;
}
export declare class EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
