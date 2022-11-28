import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StatisticSet
/** 
 * Internal only API.
**/
export class StatisticSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Maximum" })
  maximum?: number;

  @SpeakeasyMetadata({ data: "json, name=Minimum" })
  minimum?: number;

  @SpeakeasyMetadata({ data: "json, name=SampleCount" })
  sampleCount?: number;

  @SpeakeasyMetadata({ data: "json, name=Sum" })
  sum?: number;
}
