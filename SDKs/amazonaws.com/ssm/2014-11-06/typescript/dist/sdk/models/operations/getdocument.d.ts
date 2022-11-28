import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetDocumentXAmzTargetEnum {
    AmazonSsmGetDocument = "AmazonSSM.GetDocument"
}
export declare class GetDocumentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDocumentXAmzTargetEnum;
}
export declare class GetDocumentRequest extends SpeakeasyBase {
    headers: GetDocumentHeaders;
    request: shared.GetDocumentRequest;
}
export declare class GetDocumentResponse extends SpeakeasyBase {
    contentType: string;
    getDocumentResult?: shared.GetDocumentResult;
    internalServerError?: any;
    invalidDocument?: any;
    invalidDocumentVersion?: any;
    statusCode: number;
}
