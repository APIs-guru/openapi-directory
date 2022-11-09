import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { KafkaClusterEncryptionInTransitTypeEnum } from "./kafkaclusterencryptionintransittypeenum";


// KafkaClusterEncryptionInTransitDescription
/** 
 * The description of the encryption in transit to the Apache Kafka cluster.
**/
export class KafkaClusterEncryptionInTransitDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=encryptionType" })
  encryptionType?: KafkaClusterEncryptionInTransitTypeEnum;
}
