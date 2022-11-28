import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AttributesResource
/** 
 * Provides information about the type and the names of attributes that were removed from all the endpoints that are associated with an application.
**/
export class AttributesResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationId" })
  applicationId: string;

  @SpeakeasyMetadata({ data: "json, name=AttributeType" })
  attributeType: string;

  @SpeakeasyMetadata({ data: "json, name=Attributes" })
  attributes?: string[];
}
