import { SpeakeasyBase } from "../../../internal/utils";
export declare class ActionsSetSelfHostedRunnersInGroupForOrgPathParams extends SpeakeasyBase {
    org: string;
    runnerGroupId: number;
}
export declare class ActionsSetSelfHostedRunnersInGroupForOrgRequestBody extends SpeakeasyBase {
    runners: number[];
}
export declare class ActionsSetSelfHostedRunnersInGroupForOrgRequest extends SpeakeasyBase {
    pathParams: ActionsSetSelfHostedRunnersInGroupForOrgPathParams;
    request?: ActionsSetSelfHostedRunnersInGroupForOrgRequestBody;
}
export declare class ActionsSetSelfHostedRunnersInGroupForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
