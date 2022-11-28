import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteModelPackageGroupXAmzTargetEnum {
    SageMakerDeleteModelPackageGroup = "SageMaker.DeleteModelPackageGroup"
}
export declare class DeleteModelPackageGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteModelPackageGroupXAmzTargetEnum;
}
export declare class DeleteModelPackageGroupRequest extends SpeakeasyBase {
    headers: DeleteModelPackageGroupHeaders;
    request: shared.DeleteModelPackageGroupInput;
}
export declare class DeleteModelPackageGroupResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    statusCode: number;
}
