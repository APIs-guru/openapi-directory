import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AttributesResource
/** 
 * Provides information about the type and the names of attributes that were removed from all the endpoints that are associated with an application.
**/
export class AttributesResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationId" })
  applicationId: string;

  @Metadata({ data: "json, name=AttributeType" })
  attributeType: string;

  @Metadata({ data: "json, name=Attributes" })
  attributes?: string[];
}
