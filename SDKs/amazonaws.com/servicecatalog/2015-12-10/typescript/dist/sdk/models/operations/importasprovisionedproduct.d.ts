import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ImportAsProvisionedProductXAmzTargetEnum {
    Aws242ServiceCatalogServiceImportAsProvisionedProduct = "AWS242ServiceCatalogService.ImportAsProvisionedProduct"
}
export declare class ImportAsProvisionedProductHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ImportAsProvisionedProductXAmzTargetEnum;
}
export declare class ImportAsProvisionedProductRequest extends SpeakeasyBase {
    headers: ImportAsProvisionedProductHeaders;
    request: shared.ImportAsProvisionedProductInput;
}
export declare class ImportAsProvisionedProductResponse extends SpeakeasyBase {
    contentType: string;
    duplicateResourceException?: any;
    importAsProvisionedProductOutput?: shared.ImportAsProvisionedProductOutput;
    invalidParametersException?: any;
    invalidStateException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
