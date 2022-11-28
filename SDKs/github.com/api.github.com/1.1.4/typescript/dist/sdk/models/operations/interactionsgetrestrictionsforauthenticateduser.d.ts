import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InteractionsGetRestrictionsForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    interactionLimitResponse?: shared.InteractionLimitResponse;
}
