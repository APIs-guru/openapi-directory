import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetImportPathParams extends SpeakeasyBase {
    importId: string;
}
export declare class GetImportHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetImportRequest extends SpeakeasyBase {
    pathParams: GetImportPathParams;
    headers: GetImportHeaders;
}
export declare class GetImportResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getImportResponse?: shared.GetImportResponse;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
}
