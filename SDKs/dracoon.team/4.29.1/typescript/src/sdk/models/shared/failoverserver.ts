import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FailoverServer
/** 
 * Failover server information
**/
export class FailoverServer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failoverEnabled" })
  failoverEnabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=failoverIpAddress" })
  failoverIpAddress: string;

  @SpeakeasyMetadata({ data: "json, name=failoverPort" })
  failoverPort: number;
}
