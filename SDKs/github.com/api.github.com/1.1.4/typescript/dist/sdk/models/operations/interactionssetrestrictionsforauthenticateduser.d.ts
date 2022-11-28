import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InteractionsSetRestrictionsForAuthenticatedUserRequest extends SpeakeasyBase {
    request?: shared.InteractionLimit;
}
export declare class InteractionsSetRestrictionsForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    interactionLimitResponse?: shared.InteractionLimitResponse;
    validationError?: shared.ValidationError;
}
