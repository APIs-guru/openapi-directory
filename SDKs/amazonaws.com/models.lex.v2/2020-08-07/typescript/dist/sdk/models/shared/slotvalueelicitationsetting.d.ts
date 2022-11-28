import { SpeakeasyBase } from "../../../internal/utils";
import { SlotDefaultValueSpecification } from "./slotdefaultvaluespecification";
import { PromptSpecification } from "./promptspecification";
import { SampleUtterance } from "./sampleutterance";
import { SlotConstraintEnum } from "./slotconstraintenum";
import { WaitAndContinueSpecification } from "./waitandcontinuespecification";
/**
 * Settings that you can use for eliciting a slot value.
**/
export declare class SlotValueElicitationSetting extends SpeakeasyBase {
    defaultValueSpecification?: SlotDefaultValueSpecification;
    promptSpecification?: PromptSpecification;
    sampleUtterances?: SampleUtterance[];
    slotConstraint: SlotConstraintEnum;
    waitAndContinueSpecification?: WaitAndContinueSpecification;
}
