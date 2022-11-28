import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateModelPackageXAmzTargetEnum {
    SageMakerUpdateModelPackage = "SageMaker.UpdateModelPackage"
}
export declare class UpdateModelPackageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateModelPackageXAmzTargetEnum;
}
export declare class UpdateModelPackageRequest extends SpeakeasyBase {
    headers: UpdateModelPackageHeaders;
    request: shared.UpdateModelPackageInput;
}
export declare class UpdateModelPackageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateModelPackageOutput?: shared.UpdateModelPackageOutput;
}
