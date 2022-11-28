import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListSafetyRulesPathParams extends SpeakeasyBase {
    controlPanelArn: string;
}
export declare class ListSafetyRulesQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListSafetyRulesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListSafetyRulesRequest extends SpeakeasyBase {
    pathParams: ListSafetyRulesPathParams;
    queryParams: ListSafetyRulesQueryParams;
    headers: ListSafetyRulesHeaders;
}
export declare class ListSafetyRulesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listSafetyRulesResponse?: shared.ListSafetyRulesResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
