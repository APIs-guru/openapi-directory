import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateDocumentXAmzTargetEnum {
    AmazonSsmUpdateDocument = "AmazonSSM.UpdateDocument"
}
export declare class UpdateDocumentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDocumentXAmzTargetEnum;
}
export declare class UpdateDocumentRequest extends SpeakeasyBase {
    headers: UpdateDocumentHeaders;
    request: shared.UpdateDocumentRequest;
}
export declare class UpdateDocumentResponse extends SpeakeasyBase {
    contentType: string;
    documentVersionLimitExceeded?: any;
    duplicateDocumentContent?: any;
    duplicateDocumentVersionName?: any;
    internalServerError?: any;
    invalidDocument?: any;
    invalidDocumentContent?: any;
    invalidDocumentOperation?: any;
    invalidDocumentSchemaVersion?: any;
    invalidDocumentVersion?: any;
    maxDocumentSizeExceeded?: any;
    statusCode: number;
    updateDocumentResult?: shared.UpdateDocumentResult;
}
