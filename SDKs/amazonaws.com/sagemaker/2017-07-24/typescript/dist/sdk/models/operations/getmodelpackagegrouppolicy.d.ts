import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetModelPackageGroupPolicyXAmzTargetEnum {
    SageMakerGetModelPackageGroupPolicy = "SageMaker.GetModelPackageGroupPolicy"
}
export declare class GetModelPackageGroupPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetModelPackageGroupPolicyXAmzTargetEnum;
}
export declare class GetModelPackageGroupPolicyRequest extends SpeakeasyBase {
    headers: GetModelPackageGroupPolicyHeaders;
    request: shared.GetModelPackageGroupPolicyInput;
}
export declare class GetModelPackageGroupPolicyResponse extends SpeakeasyBase {
    contentType: string;
    getModelPackageGroupPolicyOutput?: shared.GetModelPackageGroupPolicyOutput;
    statusCode: number;
}
