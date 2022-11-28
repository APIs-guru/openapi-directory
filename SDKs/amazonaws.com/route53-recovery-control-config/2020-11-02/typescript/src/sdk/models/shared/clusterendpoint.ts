import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ClusterEndpoint
/** 
 * A cluster endpoint. Specify an endpoint when you want to set or retrieve a routing control state in the cluster.
**/
export class ClusterEndpoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Endpoint" })
  endpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=Region" })
  region?: string;
}
