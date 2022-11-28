import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KafkaClusterEncryptionInTransitTypeEnum } from "./kafkaclusterencryptionintransittypeenum";



// KafkaClusterEncryptionInTransitDescription
/** 
 * The description of the encryption in transit to the Apache Kafka cluster.
**/
export class KafkaClusterEncryptionInTransitDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=encryptionType" })
  encryptionType?: KafkaClusterEncryptionInTransitTypeEnum;
}
