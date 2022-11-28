import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateModelPackageGroupXAmzTargetEnum {
    SageMakerCreateModelPackageGroup = "SageMaker.CreateModelPackageGroup"
}
export declare class CreateModelPackageGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateModelPackageGroupXAmzTargetEnum;
}
export declare class CreateModelPackageGroupRequest extends SpeakeasyBase {
    headers: CreateModelPackageGroupHeaders;
    request: shared.CreateModelPackageGroupInput;
}
export declare class CreateModelPackageGroupResponse extends SpeakeasyBase {
    contentType: string;
    createModelPackageGroupOutput?: shared.CreateModelPackageGroupOutput;
    resourceLimitExceeded?: any;
    statusCode: number;
}
