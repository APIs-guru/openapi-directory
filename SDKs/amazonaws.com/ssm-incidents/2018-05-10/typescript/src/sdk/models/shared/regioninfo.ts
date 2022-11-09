import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RegionStatusEnum } from "./regionstatusenum";


// RegionInfo
/** 
 * Information about a Region in your replication set.
**/
export class RegionInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=sseKmsKeyId" })
  sseKmsKeyId?: string;

  @Metadata({ data: "json, name=status" })
  status: RegionStatusEnum;

  @Metadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=statusUpdateDateTime" })
  statusUpdateDateTime: Date;
}
