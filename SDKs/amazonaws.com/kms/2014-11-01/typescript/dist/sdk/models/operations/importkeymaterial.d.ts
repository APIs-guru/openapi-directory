import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ImportKeyMaterialXAmzTargetEnum {
    TrentServiceImportKeyMaterial = "TrentService.ImportKeyMaterial"
}
export declare class ImportKeyMaterialHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ImportKeyMaterialXAmzTargetEnum;
}
export declare class ImportKeyMaterialRequest extends SpeakeasyBase {
    headers: ImportKeyMaterialHeaders;
    request: shared.ImportKeyMaterialRequest;
}
export declare class ImportKeyMaterialResponse extends SpeakeasyBase {
    contentType: string;
    dependencyTimeoutException?: any;
    expiredImportTokenException?: any;
    importKeyMaterialResponse?: Map<string, any>;
    incorrectKeyMaterialException?: any;
    invalidArnException?: any;
    invalidCiphertextException?: any;
    invalidImportTokenException?: any;
    kmsInternalException?: any;
    kmsInvalidStateException?: any;
    notFoundException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
