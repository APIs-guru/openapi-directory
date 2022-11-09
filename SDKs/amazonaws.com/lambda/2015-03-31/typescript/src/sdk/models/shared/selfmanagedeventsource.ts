import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SelfManagedEventSource
/** 
 * The self-managed Apache Kafka cluster for your event source.
**/
export class SelfManagedEventSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=Endpoints" })
  endpoints?: Map<string, string[]>;
}
