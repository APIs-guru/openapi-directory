import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApacheKafkaClusterDescription } from "./apachekafkaclusterdescription";



// KafkaClusterDescription
/** 
 * Details of how to connect to the Apache Kafka cluster.
**/
export class KafkaClusterDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apacheKafkaCluster" })
  apacheKafkaCluster?: ApacheKafkaClusterDescription;
}
