import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetParametersForImportXAmzTargetEnum {
    TrentServiceGetParametersForImport = "TrentService.GetParametersForImport"
}
export declare class GetParametersForImportHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetParametersForImportXAmzTargetEnum;
}
export declare class GetParametersForImportRequest extends SpeakeasyBase {
    headers: GetParametersForImportHeaders;
    request: shared.GetParametersForImportRequest;
}
export declare class GetParametersForImportResponse extends SpeakeasyBase {
    contentType: string;
    dependencyTimeoutException?: any;
    getParametersForImportResponse?: shared.GetParametersForImportResponse;
    invalidArnException?: any;
    kmsInternalException?: any;
    kmsInvalidStateException?: any;
    notFoundException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
