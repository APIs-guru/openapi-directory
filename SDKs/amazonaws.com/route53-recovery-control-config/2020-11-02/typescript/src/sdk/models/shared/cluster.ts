import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterEndpoint } from "./clusterendpoint";
import { StatusEnum } from "./statusenum";



// Cluster
/** 
 * A cluster is a set of five consensus-forming Regional endpoints that represent the infrastructure that hosts your routing controls. Typically, you host together on one cluster all of the routing controls for your applications.
**/
export class Cluster extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterArn" })
  clusterArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ClusterEndpoints", elemType: ClusterEndpoint })
  clusterEndpoints?: ClusterEndpoint[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: StatusEnum;
}
