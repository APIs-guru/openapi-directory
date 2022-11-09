import { SpeakeasyBase } from "../../../internal/utils/utils";
import { VpcDescription } from "./vpcdescription";
/**
 * The description of the Apache Kafka cluster to which the connector is connected.
**/
export declare class ApacheKafkaClusterDescription extends SpeakeasyBase {
    bootstrapServers?: string;
    vpc?: VpcDescription;
}
