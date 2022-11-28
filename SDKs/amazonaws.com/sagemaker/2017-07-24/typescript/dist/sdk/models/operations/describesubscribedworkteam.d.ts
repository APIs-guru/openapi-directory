import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeSubscribedWorkteamXAmzTargetEnum {
    SageMakerDescribeSubscribedWorkteam = "SageMaker.DescribeSubscribedWorkteam"
}
export declare class DescribeSubscribedWorkteamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeSubscribedWorkteamXAmzTargetEnum;
}
export declare class DescribeSubscribedWorkteamRequest extends SpeakeasyBase {
    headers: DescribeSubscribedWorkteamHeaders;
    request: shared.DescribeSubscribedWorkteamRequest;
}
export declare class DescribeSubscribedWorkteamResponse extends SpeakeasyBase {
    contentType: string;
    describeSubscribedWorkteamResponse?: shared.DescribeSubscribedWorkteamResponse;
    statusCode: number;
}
