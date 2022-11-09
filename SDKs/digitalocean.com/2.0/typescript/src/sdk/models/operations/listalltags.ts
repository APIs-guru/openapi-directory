import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListAllTags200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=last" })
  last?: string;

  @Metadata({ data: "json, name=next" })
  next?: string;
}


export class ListAllTags200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=first" })
  first?: string;

  @Metadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListAllTags200ApplicationJsonLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=pages" })
  pages?: any;
}


// ListAllTags200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListAllTags200ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=total" })
  total: number;
}


// ListAllTags200ApplicationJsonTagsResources
/** 
 * An embedded object containing key value pairs of resource type and resource statistics. It also includes a count of the total number of resources tagged with the current tag as well as a `last_tagged_uri` attribute set to the last resource tagged with the current tag.
**/
export class ListAllTags200ApplicationJsonTagsResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=databases" })
  databases?: shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0;

  @Metadata({ data: "json, name=droplets" })
  droplets?: shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0;

  @Metadata({ data: "json, name=imgages" })
  imgages?: shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0;

  @Metadata({ data: "json, name=last_tagged_uri" })
  lastTaggedUri?: string;

  @Metadata({ data: "json, name=volume_snapshots" })
  volumeSnapshots?: shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0;

  @Metadata({ data: "json, name=volumes" })
  volumes?: shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0;
}


// ListAllTags200ApplicationJsonTags
/** 
 * A tag is a label that can be applied to a resource (currently Droplets, Images, Volumes, Volume Snapshots, and Database clusters) in order to better organize or facilitate the lookups and actions on it.
 * Tags have two attributes: a user defined `name` attribute and an embedded `resources` attribute with information about resources that have been tagged.
**/
export class ListAllTags200ApplicationJsonTags extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resources" })
  resources?: ListAllTags200ApplicationJsonTagsResources;
}


export class ListAllTags200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=links" })
  links?: ListAllTags200ApplicationJsonLinks;

  @Metadata({ data: "json, name=meta" })
  meta: ListAllTags200ApplicationJsonMeta;

  @Metadata({ data: "json, name=tags", elemType: operations.ListAllTags200ApplicationJsonTags })
  tags?: ListAllTags200ApplicationJsonTags[];
}


export class ListAllTags401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListAllTagsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  listAllTags200ApplicationJsonObject?: ListAllTags200ApplicationJson;

  @Metadata()
  listAllTags401ApplicationJsonObject?: ListAllTags401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
