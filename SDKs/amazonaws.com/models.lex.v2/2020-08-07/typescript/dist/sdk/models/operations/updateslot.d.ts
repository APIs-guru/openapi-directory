import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateSlotPathParams extends SpeakeasyBase {
    botId: string;
    botVersion: string;
    intentId: string;
    localeId: string;
    slotId: string;
}
export declare class UpdateSlotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Indicates whether a slot can return multiple values.
**/
export declare class UpdateSlotRequestBodyMultipleValuesSetting extends SpeakeasyBase {
    allowMultipleValues?: boolean;
}
/**
 * Determines whether Amazon Lex obscures slot values in conversation logs.
**/
export declare class UpdateSlotRequestBodyObfuscationSetting extends SpeakeasyBase {
    obfuscationSettingType?: shared.ObfuscationSettingTypeEnum;
}
/**
 * Settings that you can use for eliciting a slot value.
**/
export declare class UpdateSlotRequestBodyValueElicitationSetting extends SpeakeasyBase {
    defaultValueSpecification?: shared.SlotDefaultValueSpecification;
    promptSpecification?: shared.PromptSpecification;
    sampleUtterances?: shared.SampleUtterance[];
    slotConstraint?: shared.SlotConstraintEnum;
    waitAndContinueSpecification?: shared.WaitAndContinueSpecification;
}
export declare class UpdateSlotRequestBody extends SpeakeasyBase {
    description?: string;
    multipleValuesSetting?: UpdateSlotRequestBodyMultipleValuesSetting;
    obfuscationSetting?: UpdateSlotRequestBodyObfuscationSetting;
    slotName: string;
    slotTypeId: string;
    valueElicitationSetting: UpdateSlotRequestBodyValueElicitationSetting;
}
export declare class UpdateSlotRequest extends SpeakeasyBase {
    pathParams: UpdateSlotPathParams;
    headers: UpdateSlotHeaders;
    request: UpdateSlotRequestBody;
}
export declare class UpdateSlotResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    preconditionFailedException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    updateSlotResponse?: shared.UpdateSlotResponse;
    validationException?: any;
}
