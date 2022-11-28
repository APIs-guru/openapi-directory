import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails
/** 
 * A hostname and IP address mapping to append to the <b>/etc/hosts</b> file on the container.
**/
export class AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Hostname" })
  hostname?: string;

  @SpeakeasyMetadata({ data: "json, name=IpAddress" })
  ipAddress?: string;
}
