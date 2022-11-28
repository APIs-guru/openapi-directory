import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegionStatusEnum } from "./regionstatusenum";



// RegionInfo
/** 
 * Information about a Region in your replication set.
**/
export class RegionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sseKmsKeyId" })
  sseKmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: RegionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=statusUpdateDateTime" })
  statusUpdateDateTime: Date;
}
