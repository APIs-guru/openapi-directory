import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateExportHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum CreateExportRequestBodyFileFormatEnum {
    LexJson = "LexJson"
}
/**
 * Provides information about the bot or bot locale that you want to export. You can specify the <code>botExportSpecification</code> or the <code>botLocaleExportSpecification</code>, but not both.
**/
export declare class CreateExportRequestBodyResourceSpecification extends SpeakeasyBase {
    botExportSpecification?: shared.BotExportSpecification;
    botLocaleExportSpecification?: shared.BotLocaleExportSpecification;
}
export declare class CreateExportRequestBody extends SpeakeasyBase {
    fileFormat: CreateExportRequestBodyFileFormatEnum;
    filePassword?: string;
    resourceSpecification: CreateExportRequestBodyResourceSpecification;
}
export declare class CreateExportRequest extends SpeakeasyBase {
    headers: CreateExportHeaders;
    request: CreateExportRequestBody;
}
export declare class CreateExportResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    createExportResponse?: shared.CreateExportResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
