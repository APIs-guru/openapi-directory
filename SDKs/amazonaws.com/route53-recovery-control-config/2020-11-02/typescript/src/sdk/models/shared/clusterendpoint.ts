import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ClusterEndpoint
/** 
 * A cluster endpoint. Specify an endpoint when you want to set or retrieve a routing control state in the cluster.
**/
export class ClusterEndpoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=Endpoint" })
  endpoint?: string;

  @Metadata({ data: "json, name=Region" })
  region?: string;
}
