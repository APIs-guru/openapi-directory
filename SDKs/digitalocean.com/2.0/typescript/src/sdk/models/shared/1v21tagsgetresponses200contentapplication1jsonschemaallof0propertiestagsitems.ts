import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0 } from "./1v21tagsgetresponses200contentapplication1jsonschemaallof0propertiestagsitemspropertiesresourcesallof0";
import { Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0 } from "./1v21tagsgetresponses200contentapplication1jsonschemaallof0propertiestagsitemspropertiesresourcesallof0";
import { Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0 } from "./1v21tagsgetresponses200contentapplication1jsonschemaallof0propertiestagsitemspropertiesresourcesallof0";
import { Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0 } from "./1v21tagsgetresponses200contentapplication1jsonschemaallof0propertiestagsitemspropertiesresourcesallof0";
import { Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0 } from "./1v21tagsgetresponses200contentapplication1jsonschemaallof0propertiestagsitemspropertiesresourcesallof0";


// Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsResources
/** 
 * An embedded object containing key value pairs of resource type and resource statistics. It also includes a count of the total number of resources tagged with the current tag as well as a `last_tagged_uri` attribute set to the last resource tagged with the current tag.
**/
export class Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=databases" })
  databases?: Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0;

  @Metadata({ data: "json, name=droplets" })
  droplets?: Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0;

  @Metadata({ data: "json, name=imgages" })
  imgages?: Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0;

  @Metadata({ data: "json, name=last_tagged_uri" })
  lastTaggedUri?: string;

  @Metadata({ data: "json, name=volume_snapshots" })
  volumeSnapshots?: Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0;

  @Metadata({ data: "json, name=volumes" })
  volumes?: Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0;
}


// Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItems
/** 
 * A tag is a label that can be applied to a resource (currently Droplets, Images, Volumes, Volume Snapshots, and Database clusters) in order to better organize or facilitate the lookups and actions on it.
 * Tags have two attributes: a user defined `name` attribute and an embedded `resources` attribute with information about resources that have been tagged.
**/
export class Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resources" })
  resources?: Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsResources;
}
