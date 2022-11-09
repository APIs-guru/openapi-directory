import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MetricFilterMatchRecord
/** 
 * Represents a matched event.
**/
export class MetricFilterMatchRecord extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventMessage" })
  eventMessage?: string;

  @Metadata({ data: "json, name=eventNumber" })
  eventNumber?: number;

  @Metadata({ data: "json, name=extractedValues" })
  extractedValues?: Map<string, string>;
}
