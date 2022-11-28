import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateImportJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * An object that contains details about the data source of the import job.
**/
export declare class CreateImportJobRequestBodyImportDataSource extends SpeakeasyBase {
    dataFormat?: shared.DataFormatEnum;
    s3Url?: string;
}
/**
 * An object that contains details about the resource destination the import job is going to target.
**/
export declare class CreateImportJobRequestBodyImportDestination extends SpeakeasyBase {
    contactListDestination?: shared.ContactListDestination;
    suppressionListDestination?: shared.SuppressionListDestination;
}
export declare class CreateImportJobRequestBody extends SpeakeasyBase {
    importDataSource: CreateImportJobRequestBodyImportDataSource;
    importDestination: CreateImportJobRequestBodyImportDestination;
}
export declare class CreateImportJobRequest extends SpeakeasyBase {
    headers: CreateImportJobHeaders;
    request: CreateImportJobRequestBody;
}
export declare class CreateImportJobResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    createImportJobResponse?: shared.CreateImportJobResponse;
    limitExceededException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
