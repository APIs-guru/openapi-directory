import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateConstraintXAmzTargetEnum {
    Aws242ServiceCatalogServiceUpdateConstraint = "AWS242ServiceCatalogService.UpdateConstraint"
}
export declare class UpdateConstraintHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateConstraintXAmzTargetEnum;
}
export declare class UpdateConstraintRequest extends SpeakeasyBase {
    headers: UpdateConstraintHeaders;
    request: shared.UpdateConstraintInput;
}
export declare class UpdateConstraintResponse extends SpeakeasyBase {
    contentType: string;
    invalidParametersException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateConstraintOutput?: shared.UpdateConstraintOutput;
}
