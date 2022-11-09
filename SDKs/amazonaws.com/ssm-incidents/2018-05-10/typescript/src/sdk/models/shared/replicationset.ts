import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RegionInfo } from "./regioninfo";
import { ReplicationSetStatusEnum } from "./replicationsetstatusenum";


// ReplicationSet
/** 
 * The set of Regions that your Incident Manager data will be replicated to and the KMS key used to encrypt the data. 
**/
export class ReplicationSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=createdBy" })
  createdBy: string;

  @Metadata({ data: "json, name=createdTime" })
  createdTime: Date;

  @Metadata({ data: "json, name=deletionProtected" })
  deletionProtected: boolean;

  @Metadata({ data: "json, name=lastModifiedBy" })
  lastModifiedBy: string;

  @Metadata({ data: "json, name=lastModifiedTime" })
  lastModifiedTime: Date;

  @Metadata({ data: "json, name=regionMap", elemType: shared.RegionInfo })
  regionMap: Map<string, RegionInfo>;

  @Metadata({ data: "json, name=status" })
  status: ReplicationSetStatusEnum;
}
