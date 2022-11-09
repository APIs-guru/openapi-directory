import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Service
/** 
 * The metadata for a service, such as the service code and available attribute names.
**/
export class Service extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributeNames" })
  attributeNames?: string[];

  @Metadata({ data: "json, name=ServiceCode" })
  serviceCode?: string;
}
