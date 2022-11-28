import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InteractionsGetRestrictionsForRepoPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class InteractionsGetRestrictionsForRepoRequest extends SpeakeasyBase {
    pathParams: InteractionsGetRestrictionsForRepoPathParams;
}
export declare class InteractionsGetRestrictionsForRepoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    interactionLimitResponse?: shared.InteractionLimitResponse;
}
