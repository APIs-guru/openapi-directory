import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListReplicationSetsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListReplicationSetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListReplicationSetsRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListReplicationSetsRequest extends SpeakeasyBase {
    queryParams: ListReplicationSetsQueryParams;
    headers: ListReplicationSetsHeaders;
    request: ListReplicationSetsRequestBody;
}
export declare class ListReplicationSetsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listReplicationSetsOutput?: shared.ListReplicationSetsOutput;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
