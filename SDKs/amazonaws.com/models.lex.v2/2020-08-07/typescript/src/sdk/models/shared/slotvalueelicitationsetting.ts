import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SlotDefaultValueSpecification } from "./slotdefaultvaluespecification";
import { PromptSpecification } from "./promptspecification";
import { SampleUtterance } from "./sampleutterance";
import { SlotConstraintEnum } from "./slotconstraintenum";
import { WaitAndContinueSpecification } from "./waitandcontinuespecification";



// SlotValueElicitationSetting
/** 
 * Settings that you can use for eliciting a slot value.
**/
export class SlotValueElicitationSetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultValueSpecification" })
  defaultValueSpecification?: SlotDefaultValueSpecification;

  @SpeakeasyMetadata({ data: "json, name=promptSpecification" })
  promptSpecification?: PromptSpecification;

  @SpeakeasyMetadata({ data: "json, name=sampleUtterances", elemType: SampleUtterance })
  sampleUtterances?: SampleUtterance[];

  @SpeakeasyMetadata({ data: "json, name=slotConstraint" })
  slotConstraint: SlotConstraintEnum;

  @SpeakeasyMetadata({ data: "json, name=waitAndContinueSpecification" })
  waitAndContinueSpecification?: WaitAndContinueSpecification;
}
