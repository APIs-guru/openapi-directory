import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateConstraintXAmzTargetEnum {
    Aws242ServiceCatalogServiceCreateConstraint = "AWS242ServiceCatalogService.CreateConstraint"
}
export declare class CreateConstraintHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateConstraintXAmzTargetEnum;
}
export declare class CreateConstraintRequest extends SpeakeasyBase {
    headers: CreateConstraintHeaders;
    request: shared.CreateConstraintInput;
}
export declare class CreateConstraintResponse extends SpeakeasyBase {
    contentType: string;
    createConstraintOutput?: shared.CreateConstraintOutput;
    duplicateResourceException?: any;
    invalidParametersException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
