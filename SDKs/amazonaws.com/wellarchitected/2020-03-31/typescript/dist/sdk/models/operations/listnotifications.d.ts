import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListNotificationsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListNotificationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListNotificationsRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    workloadId?: string;
}
export declare class ListNotificationsRequest extends SpeakeasyBase {
    queryParams: ListNotificationsQueryParams;
    headers: ListNotificationsHeaders;
    request: ListNotificationsRequestBody;
}
export declare class ListNotificationsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listNotificationsOutput?: shared.ListNotificationsOutput;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
