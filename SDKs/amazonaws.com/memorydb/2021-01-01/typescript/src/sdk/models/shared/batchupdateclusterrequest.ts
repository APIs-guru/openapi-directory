import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceUpdateRequest } from "./serviceupdaterequest";


export class BatchUpdateClusterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterNames" })
  clusterNames: string[];

  @Metadata({ data: "json, name=ServiceUpdate" })
  serviceUpdate?: ServiceUpdateRequest;
}
