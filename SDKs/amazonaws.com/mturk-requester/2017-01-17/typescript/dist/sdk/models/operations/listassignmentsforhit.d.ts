import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAssignmentsForHitQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListAssignmentsForHitxAmzTargetEnum {
    MTurkRequesterServiceV20170117ListAssignmentsForHit = "MTurkRequesterServiceV20170117.ListAssignmentsForHIT"
}
export declare class ListAssignmentsForHitHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAssignmentsForHitxAmzTargetEnum;
}
export declare class ListAssignmentsForHitRequest extends SpeakeasyBase {
    queryParams: ListAssignmentsForHitQueryParams;
    headers: ListAssignmentsForHitHeaders;
    request: shared.ListAssignmentsForHitRequest;
}
export declare class ListAssignmentsForHitResponse extends SpeakeasyBase {
    contentType: string;
    listAssignmentsForHitResponse?: shared.ListAssignmentsForHitResponse;
    requestError?: any;
    serviceFault?: any;
    statusCode: number;
}
