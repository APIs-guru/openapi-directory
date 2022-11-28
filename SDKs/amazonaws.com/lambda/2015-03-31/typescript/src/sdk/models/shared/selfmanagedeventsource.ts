import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SelfManagedEventSource
/** 
 * The self-managed Apache Kafka cluster for your event source.
**/
export class SelfManagedEventSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Endpoints" })
  endpoints?: Map<string, string[]>;
}
