import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApacheKafkaClusterDescription } from "./apachekafkaclusterdescription";


// KafkaClusterDescription
/** 
 * Details of how to connect to the Apache Kafka cluster.
**/
export class KafkaClusterDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=apacheKafkaCluster" })
  apacheKafkaCluster?: ApacheKafkaClusterDescription;
}
