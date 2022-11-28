import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MetricFilterMatchRecord
/** 
 * Represents a matched event.
**/
export class MetricFilterMatchRecord extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventMessage" })
  eventMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=eventNumber" })
  eventNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=extractedValues" })
  extractedValues?: Map<string, string>;
}
