import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteExportPathParams extends SpeakeasyBase {
    exportId: string;
}
export declare class DeleteExportHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteExportRequest extends SpeakeasyBase {
    pathParams: DeleteExportPathParams;
    headers: DeleteExportHeaders;
}
export declare class DeleteExportResponse extends SpeakeasyBase {
    contentType: string;
    deleteExportResponse?: shared.DeleteExportResponse;
    internalServerException?: any;
    preconditionFailedException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
