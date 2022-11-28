import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateModelPackageXAmzTargetEnum {
    SageMakerCreateModelPackage = "SageMaker.CreateModelPackage"
}
export declare class CreateModelPackageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateModelPackageXAmzTargetEnum;
}
export declare class CreateModelPackageRequest extends SpeakeasyBase {
    headers: CreateModelPackageHeaders;
    request: shared.CreateModelPackageInput;
}
export declare class CreateModelPackageResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    createModelPackageOutput?: shared.CreateModelPackageOutput;
    resourceLimitExceeded?: any;
    statusCode: number;
}
