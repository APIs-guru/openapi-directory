import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Endpoint } from "./endpoint";



// Node
/** 
 * Represents an individual node within a cluster. Each node runs its own instance of the cluster's protocol-compliant caching software.
**/
export class Node extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AvailabilityZone" })
  availabilityZone?: string;

  @SpeakeasyMetadata({ data: "json, name=CreateTime" })
  createTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Endpoint" })
  endpoint?: Endpoint;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;
}
