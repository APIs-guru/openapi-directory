import { SpeakeasyBase } from "../../../internal/utils";
export declare class EnterpriseAdminSetSelfHostedRunnersInGroupForEnterprisePathParams extends SpeakeasyBase {
    enterprise: string;
    runnerGroupId: number;
}
export declare class EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequestBody extends SpeakeasyBase {
    runners: number[];
}
export declare class EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminSetSelfHostedRunnersInGroupForEnterprisePathParams;
    request?: EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequestBody;
}
export declare class EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
