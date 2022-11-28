import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsRdsDbInstanceEndpoint
/** 
 * Specifies the connection endpoint.
**/
export class AwsRdsDbInstanceEndpoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=HostedZoneId" })
  hostedZoneId?: string;

  @SpeakeasyMetadata({ data: "json, name=Port" })
  port?: number;
}
