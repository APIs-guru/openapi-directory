import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CopyProductXAmzTargetEnum {
    Aws242ServiceCatalogServiceCopyProduct = "AWS242ServiceCatalogService.CopyProduct"
}
export declare class CopyProductHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CopyProductXAmzTargetEnum;
}
export declare class CopyProductRequest extends SpeakeasyBase {
    headers: CopyProductHeaders;
    request: shared.CopyProductInput;
}
export declare class CopyProductResponse extends SpeakeasyBase {
    contentType: string;
    copyProductOutput?: shared.CopyProductOutput;
    invalidParametersException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
