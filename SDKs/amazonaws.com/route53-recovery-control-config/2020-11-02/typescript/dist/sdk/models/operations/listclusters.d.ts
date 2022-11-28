import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListClustersQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListClustersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListClustersRequest extends SpeakeasyBase {
    queryParams: ListClustersQueryParams;
    headers: ListClustersHeaders;
}
export declare class ListClustersResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listClustersResponse?: shared.ListClustersResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
