import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VpcDescription } from "./vpcdescription";


// ApacheKafkaClusterDescription
/** 
 * The description of the Apache Kafka cluster to which the connector is connected.
**/
export class ApacheKafkaClusterDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=bootstrapServers" })
  bootstrapServers?: string;

  @Metadata({ data: "json, name=vpc" })
  vpc?: VpcDescription;
}
