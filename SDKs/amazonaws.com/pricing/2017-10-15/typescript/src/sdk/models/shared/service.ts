import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Service
/** 
 * The metadata for a service, such as the service code and available attribute names.
**/
export class Service extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributeNames" })
  attributeNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=ServiceCode" })
  serviceCode?: string;
}
