import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateDocumentXAmzTargetEnum {
    AmazonSsmCreateDocument = "AmazonSSM.CreateDocument"
}
export declare class CreateDocumentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDocumentXAmzTargetEnum;
}
export declare class CreateDocumentRequest extends SpeakeasyBase {
    headers: CreateDocumentHeaders;
    request: shared.CreateDocumentRequest;
}
export declare class CreateDocumentResponse extends SpeakeasyBase {
    contentType: string;
    createDocumentResult?: shared.CreateDocumentResult;
    documentAlreadyExists?: any;
    documentLimitExceeded?: any;
    internalServerError?: any;
    invalidDocumentContent?: any;
    invalidDocumentSchemaVersion?: any;
    maxDocumentSizeExceeded?: any;
    statusCode: number;
}
