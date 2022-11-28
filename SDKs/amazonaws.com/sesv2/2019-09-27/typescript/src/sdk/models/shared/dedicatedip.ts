import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WarmupStatusEnum } from "./warmupstatusenum";



// DedicatedIp
/** 
 * <p>Contains information about a dedicated IP address that is associated with your Amazon SES account.</p> <p>To learn more about requesting dedicated IP addresses, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/dedicated-ip-case.html">Requesting and Relinquishing Dedicated IP Addresses</a> in the <i>Amazon SES Developer Guide</i>.</p>
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
