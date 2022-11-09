import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceUpdateStatusEnum } from "./serviceupdatestatusenum";
import { ServiceUpdateTypeEnum } from "./serviceupdatetypeenum";


// ServiceUpdate
/** 
 * An update that you can apply to your MemoryDB clusters.
**/
export class ServiceUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoUpdateStartDate" })
  autoUpdateStartDate?: Date;

  @Metadata({ data: "json, name=ClusterName" })
  clusterName?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=NodesUpdated" })
  nodesUpdated?: string;

  @Metadata({ data: "json, name=ReleaseDate" })
  releaseDate?: Date;

  @Metadata({ data: "json, name=ServiceUpdateName" })
  serviceUpdateName?: string;

  @Metadata({ data: "json, name=Status" })
  status?: ServiceUpdateStatusEnum;

  @Metadata({ data: "json, name=Type" })
  type?: ServiceUpdateTypeEnum;
}
