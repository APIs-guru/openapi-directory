import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListAssociatedRoute53HealthChecksPathParams extends SpeakeasyBase {
    routingControlArn: string;
}
export declare class ListAssociatedRoute53HealthChecksQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListAssociatedRoute53HealthChecksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListAssociatedRoute53HealthChecksRequest extends SpeakeasyBase {
    pathParams: ListAssociatedRoute53HealthChecksPathParams;
    queryParams: ListAssociatedRoute53HealthChecksQueryParams;
    headers: ListAssociatedRoute53HealthChecksHeaders;
}
export declare class ListAssociatedRoute53HealthChecksResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    listAssociatedRoute53HealthChecksResponse?: shared.ListAssociatedRoute53HealthChecksResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
