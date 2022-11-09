import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=defaultValueSpecification" })
  defaultValueSpecification?: SlotDefaultValueSpecification;

  @Metadata({ data: "json, name=promptSpecification" })
  promptSpecification?: PromptSpecification;

  @Metadata({ data: "json, name=sampleUtterances", elemType: shared.SampleUtterance })
  sampleUtterances?: SampleUtterance[];

  @Metadata({ data: "json, name=slotConstraint" })
  slotConstraint: SlotConstraintEnum;

  @Metadata({ data: "json, name=waitAndContinueSpecification" })
  waitAndContinueSpecification?: WaitAndContinueSpecification;
}
