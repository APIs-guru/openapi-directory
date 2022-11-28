import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteDocumentXAmzTargetEnum {
    AmazonSsmDeleteDocument = "AmazonSSM.DeleteDocument"
}
export declare class DeleteDocumentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDocumentXAmzTargetEnum;
}
export declare class DeleteDocumentRequest extends SpeakeasyBase {
    headers: DeleteDocumentHeaders;
    request: shared.DeleteDocumentRequest;
}
export declare class DeleteDocumentResponse extends SpeakeasyBase {
    associatedInstances?: any;
    contentType: string;
    deleteDocumentResult?: Map<string, any>;
    internalServerError?: any;
    invalidDocument?: any;
    invalidDocumentOperation?: any;
    statusCode: number;
}
