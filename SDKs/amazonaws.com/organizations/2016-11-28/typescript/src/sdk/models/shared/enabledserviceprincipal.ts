import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EnabledServicePrincipal
/** 
 * A structure that contains details of a service principal that represents an AWS service that is enabled to integrate with AWS Organizations.
**/
export class EnabledServicePrincipal extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DateEnabled" })
  dateEnabled?: Date;

  @SpeakeasyMetadata({ data: "json, name=ServicePrincipal" })
  servicePrincipal?: string;
}
