import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateExportPathParams extends SpeakeasyBase {
    exportId: string;
}
export declare class UpdateExportHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateExportRequestBody extends SpeakeasyBase {
    filePassword?: string;
}
export declare class UpdateExportRequest extends SpeakeasyBase {
    pathParams: UpdateExportPathParams;
    headers: UpdateExportHeaders;
    request: UpdateExportRequestBody;
}
export declare class UpdateExportResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    updateExportResponse?: shared.UpdateExportResponse;
    validationException?: any;
}
