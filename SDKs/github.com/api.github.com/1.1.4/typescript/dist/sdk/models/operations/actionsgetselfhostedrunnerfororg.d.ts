import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsGetSelfHostedRunnerForOrgPathParams extends SpeakeasyBase {
    org: string;
    runnerId: number;
}
export declare class ActionsGetSelfHostedRunnerForOrgRequest extends SpeakeasyBase {
    pathParams: ActionsGetSelfHostedRunnerForOrgPathParams;
}
export declare class ActionsGetSelfHostedRunnerForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    runner?: shared.Runner;
}
