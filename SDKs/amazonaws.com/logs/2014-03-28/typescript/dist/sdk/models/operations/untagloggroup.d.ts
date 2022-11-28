import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UntagLogGroupXAmzTargetEnum {
    Logs20140328UntagLogGroup = "Logs_20140328.UntagLogGroup"
}
export declare class UntagLogGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UntagLogGroupXAmzTargetEnum;
}
export declare class UntagLogGroupRequest extends SpeakeasyBase {
    headers: UntagLogGroupHeaders;
    request: shared.UntagLogGroupRequest;
}
export declare class UntagLogGroupResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFoundException?: any;
    statusCode: number;
}
