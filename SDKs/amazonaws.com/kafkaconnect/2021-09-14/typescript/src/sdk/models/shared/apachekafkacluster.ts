import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Vpc } from "./vpc";


// ApacheKafkaCluster
/** 
 * The details of the Apache Kafka cluster to which the connector is connected.
**/
export class ApacheKafkaCluster extends SpeakeasyBase {
  @Metadata({ data: "json, name=bootstrapServers" })
  bootstrapServers: string;

  @Metadata({ data: "json, name=vpc" })
  vpc: Vpc;
}
