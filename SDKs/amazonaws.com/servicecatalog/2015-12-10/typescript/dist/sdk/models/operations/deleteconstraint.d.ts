import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteConstraintXAmzTargetEnum {
    Aws242ServiceCatalogServiceDeleteConstraint = "AWS242ServiceCatalogService.DeleteConstraint"
}
export declare class DeleteConstraintHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteConstraintXAmzTargetEnum;
}
export declare class DeleteConstraintRequest extends SpeakeasyBase {
    headers: DeleteConstraintHeaders;
    request: shared.DeleteConstraintInput;
}
export declare class DeleteConstraintResponse extends SpeakeasyBase {
    contentType: string;
    deleteConstraintOutput?: Map<string, any>;
    invalidParametersException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
