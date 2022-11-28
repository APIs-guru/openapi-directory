import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateProductXAmzTargetEnum {
    Aws242ServiceCatalogServiceCreateProduct = "AWS242ServiceCatalogService.CreateProduct"
}
export declare class CreateProductHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateProductXAmzTargetEnum;
}
export declare class CreateProductRequest extends SpeakeasyBase {
    headers: CreateProductHeaders;
    request: shared.CreateProductInput;
}
export declare class CreateProductResponse extends SpeakeasyBase {
    contentType: string;
    createProductOutput?: shared.CreateProductOutput;
    invalidParametersException?: any;
    limitExceededException?: any;
    statusCode: number;
    tagOptionNotMigratedException?: any;
}
