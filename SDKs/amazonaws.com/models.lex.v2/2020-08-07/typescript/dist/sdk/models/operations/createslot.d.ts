import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateSlotPathParams extends SpeakeasyBase {
    botId: string;
    botVersion: string;
    intentId: string;
    localeId: string;
}
export declare class CreateSlotHeaders extends SpeakeasyBase {
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
export declare class CreateSlotRequestBodyMultipleValuesSetting extends SpeakeasyBase {
    allowMultipleValues?: boolean;
}
/**
 * Determines whether Amazon Lex obscures slot values in conversation logs.
**/
export declare class CreateSlotRequestBodyObfuscationSetting extends SpeakeasyBase {
    obfuscationSettingType?: shared.ObfuscationSettingTypeEnum;
}
/**
 * Settings that you can use for eliciting a slot value.
**/
export declare class CreateSlotRequestBodyValueElicitationSetting extends SpeakeasyBase {
    defaultValueSpecification?: shared.SlotDefaultValueSpecification;
    promptSpecification?: shared.PromptSpecification;
    sampleUtterances?: shared.SampleUtterance[];
    slotConstraint?: shared.SlotConstraintEnum;
    waitAndContinueSpecification?: shared.WaitAndContinueSpecification;
}
export declare class CreateSlotRequestBody extends SpeakeasyBase {
    description?: string;
    multipleValuesSetting?: CreateSlotRequestBodyMultipleValuesSetting;
    obfuscationSetting?: CreateSlotRequestBodyObfuscationSetting;
    slotName: string;
    slotTypeId: string;
    valueElicitationSetting: CreateSlotRequestBodyValueElicitationSetting;
}
export declare class CreateSlotRequest extends SpeakeasyBase {
    pathParams: CreateSlotPathParams;
    headers: CreateSlotHeaders;
    request: CreateSlotRequestBody;
}
export declare class CreateSlotResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    createSlotResponse?: shared.CreateSlotResponse;
    internalServerException?: any;
    preconditionFailedException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
