import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegionInfo } from "./regioninfo";
import { ReplicationSetStatusEnum } from "./replicationsetstatusenum";



// ReplicationSet
/** 
 * The set of Regions that your Incident Manager data will be replicated to and the KMS key used to encrypt the data. 
**/
export class ReplicationSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy: string;

  @SpeakeasyMetadata({ data: "json, name=createdTime" })
  createdTime: Date;

  @SpeakeasyMetadata({ data: "json, name=deletionProtected" })
  deletionProtected: boolean;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedBy" })
  lastModifiedBy: string;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedTime" })
  lastModifiedTime: Date;

  @SpeakeasyMetadata({ data: "json, name=regionMap", elemType: RegionInfo })
  regionMap: Map<string, RegionInfo>;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: ReplicationSetStatusEnum;
}
