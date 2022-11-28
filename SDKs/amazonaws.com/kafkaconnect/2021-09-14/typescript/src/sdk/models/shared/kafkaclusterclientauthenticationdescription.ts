import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KafkaClusterClientAuthenticationTypeEnum } from "./kafkaclusterclientauthenticationtypeenum";



// KafkaClusterClientAuthenticationDescription
/** 
 * The client authentication information used in order to authenticate with the Apache Kafka cluster.
**/
export class KafkaClusterClientAuthenticationDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authenticationType" })
  authenticationType?: KafkaClusterClientAuthenticationTypeEnum;
}
