import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListControlPanelsQueryParams extends SpeakeasyBase {
    clusterArn?: string;
    maxResults?: number;
    nextToken?: string;
}
export declare class ListControlPanelsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListControlPanelsRequest extends SpeakeasyBase {
    queryParams: ListControlPanelsQueryParams;
    headers: ListControlPanelsHeaders;
}
export declare class ListControlPanelsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listControlPanelsResponse?: shared.ListControlPanelsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
