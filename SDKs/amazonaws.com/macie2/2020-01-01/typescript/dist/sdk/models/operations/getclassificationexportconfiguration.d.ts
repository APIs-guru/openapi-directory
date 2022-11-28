import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetClassificationExportConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetClassificationExportConfigurationRequest extends SpeakeasyBase {
    headers: GetClassificationExportConfigurationHeaders;
}
export declare class GetClassificationExportConfigurationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    getClassificationExportConfigurationResponse?: shared.GetClassificationExportConfigurationResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
