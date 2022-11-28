import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListDocumentMetadataHistoryXAmzTargetEnum {
    AmazonSsmListDocumentMetadataHistory = "AmazonSSM.ListDocumentMetadataHistory"
}
export declare class ListDocumentMetadataHistoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDocumentMetadataHistoryXAmzTargetEnum;
}
export declare class ListDocumentMetadataHistoryRequest extends SpeakeasyBase {
    headers: ListDocumentMetadataHistoryHeaders;
    request: shared.ListDocumentMetadataHistoryRequest;
}
export declare class ListDocumentMetadataHistoryResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    invalidDocument?: any;
    invalidDocumentVersion?: any;
    invalidNextToken?: any;
    listDocumentMetadataHistoryResponse?: shared.ListDocumentMetadataHistoryResponse;
    statusCode: number;
}
