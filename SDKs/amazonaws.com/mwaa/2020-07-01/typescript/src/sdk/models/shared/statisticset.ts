import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StatisticSet
/** 
 * Internal only API.
**/
export class StatisticSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=Maximum" })
  maximum?: number;

  @Metadata({ data: "json, name=Minimum" })
  minimum?: number;

  @Metadata({ data: "json, name=SampleCount" })
  sampleCount?: number;

  @Metadata({ data: "json, name=Sum" })
  sum?: number;
}
