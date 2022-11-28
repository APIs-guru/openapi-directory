import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeVolumesXAmzTargetEnum {
    OpsWorks20130218DescribeVolumes = "OpsWorks_20130218.DescribeVolumes"
}
export declare class DescribeVolumesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeVolumesXAmzTargetEnum;
}
export declare class DescribeVolumesRequest extends SpeakeasyBase {
    headers: DescribeVolumesHeaders;
    request: shared.DescribeVolumesRequest;
}
export declare class DescribeVolumesResponse extends SpeakeasyBase {
    contentType: string;
    describeVolumesResult?: shared.DescribeVolumesResult;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
