import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateSlotTypePathParams extends SpeakeasyBase {
    botId: string;
    botVersion: string;
    localeId: string;
    slotTypeId: string;
}
export declare class UpdateSlotTypeHeaders extends SpeakeasyBase {
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
export declare class UpdateSlotTypeRequestBodyValueSelectionSetting extends SpeakeasyBase {
    regexFilter?: shared.SlotValueRegexFilter;
    resolutionStrategy?: shared.SlotValueResolutionStrategyEnum;
}
export declare class UpdateSlotTypeRequestBody extends SpeakeasyBase {
    description?: string;
    parentSlotTypeSignature?: string;
    slotTypeName: string;
    slotTypeValues?: shared.SlotTypeValue[];
    valueSelectionSetting: UpdateSlotTypeRequestBodyValueSelectionSetting;
}
export declare class UpdateSlotTypeRequest extends SpeakeasyBase {
    pathParams: UpdateSlotTypePathParams;
    headers: UpdateSlotTypeHeaders;
    request: UpdateSlotTypeRequestBody;
}
export declare class UpdateSlotTypeResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    preconditionFailedException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    updateSlotTypeResponse?: shared.UpdateSlotTypeResponse;
    validationException?: any;
}
