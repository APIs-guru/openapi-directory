import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListTagsLogGroupXAmzTargetEnum {
    Logs20140328ListTagsLogGroup = "Logs_20140328.ListTagsLogGroup"
}
export declare class ListTagsLogGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTagsLogGroupXAmzTargetEnum;
}
export declare class ListTagsLogGroupRequest extends SpeakeasyBase {
    headers: ListTagsLogGroupHeaders;
    request: shared.ListTagsLogGroupRequest;
}
export declare class ListTagsLogGroupResponse extends SpeakeasyBase {
    contentType: string;
    listTagsLogGroupResponse?: shared.ListTagsLogGroupResponse;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
