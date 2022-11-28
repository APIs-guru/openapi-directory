import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutModelPackageGroupPolicyXAmzTargetEnum {
    SageMakerPutModelPackageGroupPolicy = "SageMaker.PutModelPackageGroupPolicy"
}
export declare class PutModelPackageGroupPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutModelPackageGroupPolicyXAmzTargetEnum;
}
export declare class PutModelPackageGroupPolicyRequest extends SpeakeasyBase {
    headers: PutModelPackageGroupPolicyHeaders;
    request: shared.PutModelPackageGroupPolicyInput;
}
export declare class PutModelPackageGroupPolicyResponse extends SpeakeasyBase {
    contentType: string;
    putModelPackageGroupPolicyOutput?: shared.PutModelPackageGroupPolicyOutput;
    statusCode: number;
}
