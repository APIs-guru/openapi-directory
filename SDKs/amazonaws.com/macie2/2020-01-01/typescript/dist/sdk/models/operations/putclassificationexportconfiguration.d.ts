import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutClassificationExportConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies where to store data classification results, and the encryption settings to use when storing results in that location. Currently, you can store classification results only in an S3 bucket.
**/
export declare class PutClassificationExportConfigurationRequestBodyConfiguration extends SpeakeasyBase {
    s3Destination?: shared.S3Destination;
}
export declare class PutClassificationExportConfigurationRequestBody extends SpeakeasyBase {
    configuration: PutClassificationExportConfigurationRequestBodyConfiguration;
}
export declare class PutClassificationExportConfigurationRequest extends SpeakeasyBase {
    headers: PutClassificationExportConfigurationHeaders;
    request: PutClassificationExportConfigurationRequestBody;
}
export declare class PutClassificationExportConfigurationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    putClassificationExportConfigurationResponse?: shared.PutClassificationExportConfigurationResponse;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
