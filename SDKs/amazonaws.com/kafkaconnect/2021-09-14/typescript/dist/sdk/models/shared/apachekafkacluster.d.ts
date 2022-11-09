import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Vpc } from "./vpc";
/**
 * The details of the Apache Kafka cluster to which the connector is connected.
**/
export declare class ApacheKafkaCluster extends SpeakeasyBase {
    bootstrapServers: string;
    vpc: Vpc;
}
