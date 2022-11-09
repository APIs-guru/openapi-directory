import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EnabledServicePrincipal
/** 
 * A structure that contains details of a service principal that represents an AWS service that is enabled to integrate with AWS Organizations.
**/
export class EnabledServicePrincipal extends SpeakeasyBase {
  @Metadata({ data: "json, name=DateEnabled" })
  dateEnabled?: Date;

  @Metadata({ data: "json, name=ServicePrincipal" })
  servicePrincipal?: string;
}
