import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { KafkaClusterClientAuthenticationTypeEnum } from "./kafkaclusterclientauthenticationtypeenum";


// KafkaClusterClientAuthenticationDescription
/** 
 * The client authentication information used in order to authenticate with the Apache Kafka cluster.
**/
export class KafkaClusterClientAuthenticationDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=authenticationType" })
  authenticationType?: KafkaClusterClientAuthenticationTypeEnum;
}
