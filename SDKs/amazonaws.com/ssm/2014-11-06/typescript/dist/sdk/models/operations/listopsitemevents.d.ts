import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListOpsItemEventsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListOpsItemEventsXAmzTargetEnum {
    AmazonSsmListOpsItemEvents = "AmazonSSM.ListOpsItemEvents"
}
export declare class ListOpsItemEventsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListOpsItemEventsXAmzTargetEnum;
}
export declare class ListOpsItemEventsRequest extends SpeakeasyBase {
    queryParams: ListOpsItemEventsQueryParams;
    headers: ListOpsItemEventsHeaders;
    request: shared.ListOpsItemEventsRequest;
}
export declare class ListOpsItemEventsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    listOpsItemEventsResponse?: shared.ListOpsItemEventsResponse;
    opsItemInvalidParameterException?: any;
    opsItemLimitExceededException?: any;
    opsItemNotFoundException?: any;
    statusCode: number;
}
