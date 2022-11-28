import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteModelPackageXAmzTargetEnum {
    SageMakerDeleteModelPackage = "SageMaker.DeleteModelPackage"
}
export declare class DeleteModelPackageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteModelPackageXAmzTargetEnum;
}
export declare class DeleteModelPackageRequest extends SpeakeasyBase {
    headers: DeleteModelPackageHeaders;
    request: shared.DeleteModelPackageInput;
}
export declare class DeleteModelPackageResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    statusCode: number;
}
