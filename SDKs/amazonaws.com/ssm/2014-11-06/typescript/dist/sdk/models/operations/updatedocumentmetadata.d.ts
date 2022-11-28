import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateDocumentMetadataXAmzTargetEnum {
    AmazonSsmUpdateDocumentMetadata = "AmazonSSM.UpdateDocumentMetadata"
}
export declare class UpdateDocumentMetadataHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDocumentMetadataXAmzTargetEnum;
}
export declare class UpdateDocumentMetadataRequest extends SpeakeasyBase {
    headers: UpdateDocumentMetadataHeaders;
    request: shared.UpdateDocumentMetadataRequest;
}
export declare class UpdateDocumentMetadataResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    invalidDocument?: any;
    invalidDocumentOperation?: any;
    invalidDocumentVersion?: any;
    statusCode: number;
    updateDocumentMetadataResponse?: Map<string, any>;
}
