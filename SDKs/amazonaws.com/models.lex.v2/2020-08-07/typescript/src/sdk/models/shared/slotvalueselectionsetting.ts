import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SlotValueRegexFilter } from "./slotvalueregexfilter";
import { SlotValueResolutionStrategyEnum } from "./slotvalueresolutionstrategyenum";


// SlotValueSelectionSetting
/** 
 * Contains settings used by Amazon Lex to select a slot value.
**/
export class SlotValueSelectionSetting extends SpeakeasyBase {
  @Metadata({ data: "json, name=regexFilter" })
  regexFilter?: SlotValueRegexFilter;

  @Metadata({ data: "json, name=resolutionStrategy" })
  resolutionStrategy: SlotValueResolutionStrategyEnum;
}
