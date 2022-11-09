import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FailoverServer
/** 
 * Failover server information
**/
export class FailoverServer extends SpeakeasyBase {
  @Metadata({ data: "json, name=failoverEnabled" })
  failoverEnabled: boolean;

  @Metadata({ data: "json, name=failoverIpAddress" })
  failoverIpAddress: string;

  @Metadata({ data: "json, name=failoverPort" })
  failoverPort: number;
}
