import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateDocumentDefaultVersionXAmzTargetEnum {
    AmazonSsmUpdateDocumentDefaultVersion = "AmazonSSM.UpdateDocumentDefaultVersion"
}
export declare class UpdateDocumentDefaultVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDocumentDefaultVersionXAmzTargetEnum;
}
export declare class UpdateDocumentDefaultVersionRequest extends SpeakeasyBase {
    headers: UpdateDocumentDefaultVersionHeaders;
    request: shared.UpdateDocumentDefaultVersionRequest;
}
export declare class UpdateDocumentDefaultVersionResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    invalidDocument?: any;
    invalidDocumentSchemaVersion?: any;
    invalidDocumentVersion?: any;
    statusCode: number;
    updateDocumentDefaultVersionResult?: shared.UpdateDocumentDefaultVersionResult;
}
