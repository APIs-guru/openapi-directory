import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceUpdateRequest } from "./serviceupdaterequest";



export class BatchUpdateClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterNames" })
  clusterNames: string[];

  @SpeakeasyMetadata({ data: "json, name=ServiceUpdate" })
  serviceUpdate?: ServiceUpdateRequest;
}
