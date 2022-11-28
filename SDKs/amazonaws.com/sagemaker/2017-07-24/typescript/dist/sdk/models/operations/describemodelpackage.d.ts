import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeModelPackageXAmzTargetEnum {
    SageMakerDescribeModelPackage = "SageMaker.DescribeModelPackage"
}
export declare class DescribeModelPackageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeModelPackageXAmzTargetEnum;
}
export declare class DescribeModelPackageRequest extends SpeakeasyBase {
    headers: DescribeModelPackageHeaders;
    request: shared.DescribeModelPackageInput;
}
export declare class DescribeModelPackageResponse extends SpeakeasyBase {
    contentType: string;
    describeModelPackageOutput?: shared.DescribeModelPackageOutput;
    statusCode: number;
}
