import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InteractionsSetRestrictionsForOrgPathParams extends SpeakeasyBase {
    org: string;
}
export declare class InteractionsSetRestrictionsForOrgRequest extends SpeakeasyBase {
    pathParams: InteractionsSetRestrictionsForOrgPathParams;
    request?: shared.InteractionLimit;
}
export declare class InteractionsSetRestrictionsForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    interactionLimitResponse?: shared.InteractionLimitResponse;
    validationError?: shared.ValidationError;
}
