import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Vpc } from "./vpc";



// ApacheKafkaCluster
/** 
 * The details of the Apache Kafka cluster to which the connector is connected.
**/
export class ApacheKafkaCluster extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bootstrapServers" })
  bootstrapServers: string;

  @SpeakeasyMetadata({ data: "json, name=vpc" })
  vpc: Vpc;
}
