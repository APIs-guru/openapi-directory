import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeCommandsXAmzTargetEnum {
    OpsWorks20130218DescribeCommands = "OpsWorks_20130218.DescribeCommands"
}
export declare class DescribeCommandsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeCommandsXAmzTargetEnum;
}
export declare class DescribeCommandsRequest extends SpeakeasyBase {
    headers: DescribeCommandsHeaders;
    request: shared.DescribeCommandsRequest;
}
export declare class DescribeCommandsResponse extends SpeakeasyBase {
    contentType: string;
    describeCommandsResult?: shared.DescribeCommandsResult;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
