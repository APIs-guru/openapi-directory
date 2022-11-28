import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateSlotTypePathParams extends SpeakeasyBase {
    botId: string;
    botVersion: string;
    localeId: string;
}
export declare class CreateSlotTypeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Contains settings used by Amazon Lex to select a slot value.
**/
export declare class CreateSlotTypeRequestBodyValueSelectionSetting extends SpeakeasyBase {
    regexFilter?: shared.SlotValueRegexFilter;
    resolutionStrategy?: shared.SlotValueResolutionStrategyEnum;
}
export declare class CreateSlotTypeRequestBody extends SpeakeasyBase {
    description?: string;
    parentSlotTypeSignature?: string;
    slotTypeName: string;
    slotTypeValues?: shared.SlotTypeValue[];
    valueSelectionSetting: CreateSlotTypeRequestBodyValueSelectionSetting;
}
export declare class CreateSlotTypeRequest extends SpeakeasyBase {
    pathParams: CreateSlotTypePathParams;
    headers: CreateSlotTypeHeaders;
    request: CreateSlotTypeRequestBody;
}
export declare class CreateSlotTypeResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    createSlotTypeResponse?: shared.CreateSlotTypeResponse;
    internalServerException?: any;
    preconditionFailedException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
