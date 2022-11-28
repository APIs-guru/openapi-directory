import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InteractionsSetRestrictionsForRepoPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class InteractionsSetRestrictionsForRepoRequest extends SpeakeasyBase {
    pathParams: InteractionsSetRestrictionsForRepoPathParams;
    request?: shared.InteractionLimit;
}
export declare class InteractionsSetRestrictionsForRepoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    interactionLimitResponse?: shared.InteractionLimitResponse;
}
