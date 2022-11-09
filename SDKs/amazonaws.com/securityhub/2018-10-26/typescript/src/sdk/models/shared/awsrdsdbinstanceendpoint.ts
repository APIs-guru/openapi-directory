import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsRdsDbInstanceEndpoint
/** 
 * Specifies the connection endpoint.
**/
export class AwsRdsDbInstanceEndpoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=Address" })
  address?: string;

  @Metadata({ data: "json, name=HostedZoneId" })
  hostedZoneId?: string;

  @Metadata({ data: "json, name=Port" })
  port?: number;
}
