import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListRoutingControlsPathParams extends SpeakeasyBase {
    controlPanelArn: string;
}
export declare class ListRoutingControlsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListRoutingControlsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListRoutingControlsRequest extends SpeakeasyBase {
    pathParams: ListRoutingControlsPathParams;
    queryParams: ListRoutingControlsQueryParams;
    headers: ListRoutingControlsHeaders;
}
export declare class ListRoutingControlsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listRoutingControlsResponse?: shared.ListRoutingControlsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
