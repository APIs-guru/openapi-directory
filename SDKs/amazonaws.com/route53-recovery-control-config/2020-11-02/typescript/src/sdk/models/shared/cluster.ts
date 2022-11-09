import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ClusterEndpoint } from "./clusterendpoint";
import { StatusEnum } from "./statusenum";


// Cluster
/** 
 * A cluster is a set of five consensus-forming Regional endpoints that represent the infrastructure that hosts your routing controls. Typically, you host together on one cluster all of the routing controls for your applications.
**/
export class Cluster extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterArn" })
  clusterArn?: string;

  @Metadata({ data: "json, name=ClusterEndpoints", elemType: shared.ClusterEndpoint })
  clusterEndpoints?: ClusterEndpoint[];

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Status" })
  status?: StatusEnum;
}
