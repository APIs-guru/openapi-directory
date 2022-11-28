import { SpeakeasyBase } from "../../../internal/utils";
import { KafkaClusterClientAuthenticationTypeEnum } from "./kafkaclusterclientauthenticationtypeenum";
/**
 * The client authentication information used in order to authenticate with the Apache Kafka cluster.
**/
export declare class KafkaClusterClientAuthenticationDescription extends SpeakeasyBase {
    authenticationType?: KafkaClusterClientAuthenticationTypeEnum;
}
