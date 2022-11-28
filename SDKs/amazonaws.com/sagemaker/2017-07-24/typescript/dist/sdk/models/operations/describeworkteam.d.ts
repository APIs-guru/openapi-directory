import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeWorkteamXAmzTargetEnum {
    SageMakerDescribeWorkteam = "SageMaker.DescribeWorkteam"
}
export declare class DescribeWorkteamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeWorkteamXAmzTargetEnum;
}
export declare class DescribeWorkteamRequest extends SpeakeasyBase {
    headers: DescribeWorkteamHeaders;
    request: shared.DescribeWorkteamRequest;
}
export declare class DescribeWorkteamResponse extends SpeakeasyBase {
    contentType: string;
    describeWorkteamResponse?: shared.DescribeWorkteamResponse;
    statusCode: number;
}
