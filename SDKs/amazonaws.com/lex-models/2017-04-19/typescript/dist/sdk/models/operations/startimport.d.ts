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
    OverwriteLatest = "OVERWRITE_LATEST",
    FailOnConflict = "FAIL_ON_CONFLICT"
}
export declare enum StartImportRequestBodyResourceTypeEnum {
    Bot = "BOT",
    Intent = "INTENT",
    SlotType = "SLOT_TYPE"
}
export declare class StartImportRequestBody extends SpeakeasyBase {
    mergeStrategy: StartImportRequestBodyMergeStrategyEnum;
    payload: string;
    resourceType: StartImportRequestBodyResourceTypeEnum;
    tags?: shared.Tag[];
}
export declare class StartImportRequest extends SpeakeasyBase {
    headers: StartImportHeaders;
    request: StartImportRequestBody;
}
export declare class StartImportResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    internalFailureException?: any;
    limitExceededException?: any;
    startImportResponse?: shared.StartImportResponse;
    statusCode: number;
}
