import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RelativeTimeRange
/** 
 * An object that allows percentages to specify the proportion of the call where you would like to apply a filter. For example, you can specify the first half of the call. You can also specify the period of time between halfway through to three-quarters of the way through the call. Because the length of conversation can vary between calls, you can apply relative time ranges across all calls. 
**/
export class RelativeTimeRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndPercentage" })
  endPercentage?: number;

  @Metadata({ data: "json, name=First" })
  first?: number;

  @Metadata({ data: "json, name=Last" })
  last?: number;

  @Metadata({ data: "json, name=StartPercentage" })
  startPercentage?: number;
}
