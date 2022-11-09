import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails
/** 
 * A hostname and IP address mapping to append to the <b>/etc/hosts</b> file on the container.
**/
export class AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Hostname" })
  hostname?: string;

  @Metadata({ data: "json, name=IpAddress" })
  ipAddress?: string;
}
