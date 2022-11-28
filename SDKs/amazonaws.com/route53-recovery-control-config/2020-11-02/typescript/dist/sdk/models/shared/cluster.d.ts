import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterEndpoint } from "./clusterendpoint";
import { StatusEnum } from "./statusenum";
/**
 * A cluster is a set of five consensus-forming Regional endpoints that represent the infrastructure that hosts your routing controls. Typically, you host together on one cluster all of the routing controls for your applications.
**/
export declare class Cluster extends SpeakeasyBase {
    clusterArn?: string;
    clusterEndpoints?: ClusterEndpoint[];
    name?: string;
    status?: StatusEnum;
}
