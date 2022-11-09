import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListDropletAssociatedResourcesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=droplet_id" })
  dropletId: number;
}


export class ListDropletAssociatedResourcesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListDropletAssociatedResourcesPathParams;
}


// ListDropletAssociatedResources200ApplicationJsonSnapshots
/** 
 * An objects containing information about a resource associated with a Droplet.
**/
export class ListDropletAssociatedResources200ApplicationJsonSnapshots extends SpeakeasyBase {
  @Metadata({ data: "json, name=cost" })
  cost?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class ListDropletAssociatedResources200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=snapshots", elemType: operations.ListDropletAssociatedResources200ApplicationJsonSnapshots })
  snapshots?: ListDropletAssociatedResources200ApplicationJsonSnapshots[];

  @Metadata({ data: "json, name=volume_snapshots", elemType: shared.Onev21droplets1Percent7BdropletIdPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItems })
  volumeSnapshots?: shared.Onev21droplets1Percent7BdropletIdPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItems[];

  @Metadata({ data: "json, name=volumes", elemType: shared.Onev21droplets1Percent7BdropletIdPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItems })
  volumes?: shared.Onev21droplets1Percent7BdropletIdPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItems[];
}


export class ListDropletAssociatedResources401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListDropletAssociatedResourcesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  listDropletAssociatedResources200ApplicationJsonObject?: ListDropletAssociatedResources200ApplicationJson;

  @Metadata()
  listDropletAssociatedResources401ApplicationJsonObject?: ListDropletAssociatedResources401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
