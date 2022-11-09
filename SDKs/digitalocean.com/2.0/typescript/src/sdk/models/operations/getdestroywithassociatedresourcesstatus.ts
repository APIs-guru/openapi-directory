import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDestroyWithAssociatedResourcesStatusPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=droplet_id" })
  dropletId: number;
}


export class GetDestroyWithAssociatedResourcesStatusRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDestroyWithAssociatedResourcesStatusPathParams;
}


// GetDestroyWithAssociatedResourcesStatus200ApplicationJsonDroplet
/** 
 * An object containing information about a resource scheduled for deletion.
**/
export class GetDestroyWithAssociatedResourcesStatus200ApplicationJsonDroplet extends SpeakeasyBase {
  @Metadata({ data: "json, name=destroyed_at" })
  destroyedAt?: Date;

  @Metadata({ data: "json, name=error_message" })
  errorMessage?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


// GetDestroyWithAssociatedResourcesStatus200ApplicationJsonResources
/** 
 * An object containing additional information about resource related to a Droplet requested to be destroyed.
**/
export class GetDestroyWithAssociatedResourcesStatus200ApplicationJsonResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=snapshots", elemType: shared.Onev21droplets1Percent7BdropletIdPercent7D1destroyWithAssociatedResources1statusGetResponses200ContentApplication1jsonSchemaPropertiesDroplet })
  snapshots?: shared.Onev21droplets1Percent7BdropletIdPercent7D1destroyWithAssociatedResources1statusGetResponses200ContentApplication1jsonSchemaPropertiesDroplet[];

  @Metadata({ data: "json, name=volume_snapshots", elemType: shared.Onev21droplets1Percent7BdropletIdPercent7D1destroyWithAssociatedResources1statusGetResponses200ContentApplication1jsonSchemaPropertiesDroplet })
  volumeSnapshots?: shared.Onev21droplets1Percent7BdropletIdPercent7D1destroyWithAssociatedResources1statusGetResponses200ContentApplication1jsonSchemaPropertiesDroplet[];

  @Metadata({ data: "json, name=volumes", elemType: shared.Onev21droplets1Percent7BdropletIdPercent7D1destroyWithAssociatedResources1statusGetResponses200ContentApplication1jsonSchemaPropertiesDroplet })
  volumes?: shared.Onev21droplets1Percent7BdropletIdPercent7D1destroyWithAssociatedResources1statusGetResponses200ContentApplication1jsonSchemaPropertiesDroplet[];
}


// GetDestroyWithAssociatedResourcesStatus200ApplicationJson
/** 
 * An objects containing information about a resources scheduled for deletion.
**/
export class GetDestroyWithAssociatedResourcesStatus200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=completed_at" })
  completedAt?: Date;

  @Metadata({ data: "json, name=droplet" })
  droplet?: GetDestroyWithAssociatedResourcesStatus200ApplicationJsonDroplet;

  @Metadata({ data: "json, name=failures" })
  failures?: number;

  @Metadata({ data: "json, name=resources" })
  resources?: GetDestroyWithAssociatedResourcesStatus200ApplicationJsonResources;
}


export class GetDestroyWithAssociatedResourcesStatus401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetDestroyWithAssociatedResourcesStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDestroyWithAssociatedResourcesStatus200ApplicationJsonObject?: GetDestroyWithAssociatedResourcesStatus200ApplicationJson;

  @Metadata()
  getDestroyWithAssociatedResourcesStatus401ApplicationJsonObject?: GetDestroyWithAssociatedResourcesStatus401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
