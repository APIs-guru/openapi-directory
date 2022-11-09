import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VpcAccessibleServices } from "./vpcaccessibleservices";


// ServicePerimeterConfig
/** 
 * `ServicePerimeterConfig` specifies a set of Google Cloud resources that describe specific Service Perimeter configuration.
**/
export class ServicePerimeterConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessLevels" })
  accessLevels?: string[];

  @Metadata({ data: "json, name=resources" })
  resources?: string[];

  @Metadata({ data: "json, name=restrictedServices" })
  restrictedServices?: string[];

  @Metadata({ data: "json, name=unrestrictedServices" })
  unrestrictedServices?: string[];

  @Metadata({ data: "json, name=vpcAccessibleServices" })
  vpcAccessibleServices?: VpcAccessibleServices;
}
