import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0
/** 
 * Tagged Resource Statistics include metadata regarding the resource type that has been tagged.
**/
export class Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0 extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=last_tagged_uri" })
  lastTaggedUri?: string;
}
