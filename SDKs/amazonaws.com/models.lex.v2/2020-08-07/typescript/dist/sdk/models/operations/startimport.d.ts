import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StartImportHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum StartImportRequestBodyMergeStrategyEnum {
    Overwrite = "Overwrite",
    FailOnConflict = "FailOnConflict"
}
/**
 * Provides information about the bot or bot locale that you want to import. You can sepcifiy the <code>botImportSpecification</code> or the <code>botLocaleImportSpecification</code>, but not both.
**/
export declare class StartImportRequestBodyResourceSpecification extends SpeakeasyBase {
    botImportSpecification?: shared.BotImportSpecification;
    botLocaleImportSpecification?: shared.BotLocaleImportSpecification;
}
export declare class StartImportRequestBody extends SpeakeasyBase {
    filePassword?: string;
    importId: string;
    mergeStrategy: StartImportRequestBodyMergeStrategyEnum;
    resourceSpecification: StartImportRequestBodyResourceSpecification;
}
export declare class StartImportRequest extends SpeakeasyBase {
    headers: StartImportHeaders;
    request: StartImportRequestBody;
}
export declare class StartImportResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    startImportResponse?: shared.StartImportResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
