import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpcDescription } from "./vpcdescription";



// ApacheKafkaClusterDescription
/** 
 * The description of the Apache Kafka cluster to which the connector is connected.
**/
export class ApacheKafkaClusterDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bootstrapServers" })
  bootstrapServers?: string;

  @SpeakeasyMetadata({ data: "json, name=vpc" })
  vpc?: VpcDescription;
}
