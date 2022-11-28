import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeJobXAmzTargetEnum {
    AwsieSnowballJobManagementServiceDescribeJob = "AWSIESnowballJobManagementService.DescribeJob"
}
export declare class DescribeJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeJobXAmzTargetEnum;
}
export declare class DescribeJobRequest extends SpeakeasyBase {
    headers: DescribeJobHeaders;
    request: shared.DescribeJobRequest;
}
export declare class DescribeJobResponse extends SpeakeasyBase {
    contentType: string;
    describeJobResult?: shared.DescribeJobResult;
    invalidResourceException?: any;
    statusCode: number;
}
