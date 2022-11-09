import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VpcAccessibleServices
/** 
 * Specifies how APIs are allowed to communicate within the Service Perimeter.
**/
export class VpcAccessibleServices extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedServices" })
  allowedServices?: string[];

  @Metadata({ data: "json, name=enableRestriction" })
  enableRestriction?: boolean;
}
