import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteModelPackageGroupPolicyXAmzTargetEnum {
    SageMakerDeleteModelPackageGroupPolicy = "SageMaker.DeleteModelPackageGroupPolicy"
}
export declare class DeleteModelPackageGroupPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteModelPackageGroupPolicyXAmzTargetEnum;
}
export declare class DeleteModelPackageGroupPolicyRequest extends SpeakeasyBase {
    headers: DeleteModelPackageGroupPolicyHeaders;
    request: shared.DeleteModelPackageGroupPolicyInput;
}
export declare class DeleteModelPackageGroupPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
