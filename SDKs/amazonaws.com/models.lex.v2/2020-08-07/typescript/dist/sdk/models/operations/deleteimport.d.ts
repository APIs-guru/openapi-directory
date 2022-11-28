import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteImportPathParams extends SpeakeasyBase {
    importId: string;
}
export declare class DeleteImportHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteImportRequest extends SpeakeasyBase {
    pathParams: DeleteImportPathParams;
    headers: DeleteImportHeaders;
}
export declare class DeleteImportResponse extends SpeakeasyBase {
    contentType: string;
    deleteImportResponse?: shared.DeleteImportResponse;
    internalServerException?: any;
    preconditionFailedException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
