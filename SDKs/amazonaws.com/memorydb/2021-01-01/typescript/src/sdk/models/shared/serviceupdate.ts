import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceUpdateStatusEnum } from "./serviceupdatestatusenum";
import { ServiceUpdateTypeEnum } from "./serviceupdatetypeenum";



// ServiceUpdate
/** 
 * An update that you can apply to your MemoryDB clusters.
**/
export class ServiceUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoUpdateStartDate" })
  autoUpdateStartDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=ClusterName" })
  clusterName?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=NodesUpdated" })
  nodesUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=ReleaseDate" })
  releaseDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=ServiceUpdateName" })
  serviceUpdateName?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ServiceUpdateStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: ServiceUpdateTypeEnum;
}
