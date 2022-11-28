import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ModifyDocumentPermissionXAmzTargetEnum {
    AmazonSsmModifyDocumentPermission = "AmazonSSM.ModifyDocumentPermission"
}
export declare class ModifyDocumentPermissionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ModifyDocumentPermissionXAmzTargetEnum;
}
export declare class ModifyDocumentPermissionRequest extends SpeakeasyBase {
    headers: ModifyDocumentPermissionHeaders;
    request: shared.ModifyDocumentPermissionRequest;
}
export declare class ModifyDocumentPermissionResponse extends SpeakeasyBase {
    contentType: string;
    documentLimitExceeded?: any;
    documentPermissionLimit?: any;
    internalServerError?: any;
    invalidDocument?: any;
    invalidPermissionType?: any;
    modifyDocumentPermissionResponse?: Map<string, any>;
    statusCode: number;
}
