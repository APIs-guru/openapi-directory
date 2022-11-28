import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum TagLogGroupXAmzTargetEnum {
    Logs20140328TagLogGroup = "Logs_20140328.TagLogGroup"
}
export declare class TagLogGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TagLogGroupXAmzTargetEnum;
}
export declare class TagLogGroupRequest extends SpeakeasyBase {
    headers: TagLogGroupHeaders;
    request: shared.TagLogGroupRequest;
}
export declare class TagLogGroupResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
