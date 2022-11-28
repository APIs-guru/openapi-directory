import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WarmupStatusEnum } from "./warmupstatusenum";



// DedicatedIp
/** 
 * <p>Contains information about a dedicated IP address that is associated with your Amazon Pinpoint account.</p> <p/>
**/
export class DedicatedIp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Ip" })
  ip: string;

  @SpeakeasyMetadata({ data: "json, name=PoolName" })
  poolName?: string;

  @SpeakeasyMetadata({ data: "json, name=WarmupPercentage" })
  warmupPercentage: number;

  @SpeakeasyMetadata({ data: "json, name=WarmupStatus" })
  warmupStatus: WarmupStatusEnum;
}
