import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SlotValueRegexFilter } from "./slotvalueregexfilter";
import { SlotValueResolutionStrategyEnum } from "./slotvalueresolutionstrategyenum";



// SlotValueSelectionSetting
/** 
 * Contains settings used by Amazon Lex to select a slot value.
**/
export class SlotValueSelectionSetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=regexFilter" })
  regexFilter?: SlotValueRegexFilter;

  @SpeakeasyMetadata({ data: "json, name=resolutionStrategy" })
  resolutionStrategy: SlotValueResolutionStrategyEnum;
}
