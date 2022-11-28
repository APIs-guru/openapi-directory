import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InteractionsGetRestrictionsForOrgPathParams extends SpeakeasyBase {
    org: string;
}
export declare class InteractionsGetRestrictionsForOrgRequest extends SpeakeasyBase {
    pathParams: InteractionsGetRestrictionsForOrgPathParams;
}
export declare class InteractionsGetRestrictionsForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    interactionLimitResponse?: shared.InteractionLimitResponse;
}
