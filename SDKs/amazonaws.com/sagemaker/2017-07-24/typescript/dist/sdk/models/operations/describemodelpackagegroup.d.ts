import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeModelPackageGroupXAmzTargetEnum {
    SageMakerDescribeModelPackageGroup = "SageMaker.DescribeModelPackageGroup"
}
export declare class DescribeModelPackageGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeModelPackageGroupXAmzTargetEnum;
}
export declare class DescribeModelPackageGroupRequest extends SpeakeasyBase {
    headers: DescribeModelPackageGroupHeaders;
    request: shared.DescribeModelPackageGroupInput;
}
export declare class DescribeModelPackageGroupResponse extends SpeakeasyBase {
    contentType: string;
    describeModelPackageGroupOutput?: shared.DescribeModelPackageGroupOutput;
    statusCode: number;
}
