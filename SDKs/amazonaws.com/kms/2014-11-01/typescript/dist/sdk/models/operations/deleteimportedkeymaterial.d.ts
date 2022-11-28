import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteImportedKeyMaterialXAmzTargetEnum {
    TrentServiceDeleteImportedKeyMaterial = "TrentService.DeleteImportedKeyMaterial"
}
export declare class DeleteImportedKeyMaterialHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteImportedKeyMaterialXAmzTargetEnum;
}
export declare class DeleteImportedKeyMaterialRequest extends SpeakeasyBase {
    headers: DeleteImportedKeyMaterialHeaders;
    request: shared.DeleteImportedKeyMaterialRequest;
}
export declare class DeleteImportedKeyMaterialResponse extends SpeakeasyBase {
    contentType: string;
    dependencyTimeoutException?: any;
    invalidArnException?: any;
    kmsInternalException?: any;
    kmsInvalidStateException?: any;
    notFoundException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
