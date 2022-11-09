import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DestroyWithAssociatedResourcesSelectivePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=droplet_id" })
  dropletId: number;
}


export class DestroyWithAssociatedResourcesSelectiveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DestroyWithAssociatedResourcesSelectivePathParams;
}


export class DestroyWithAssociatedResourcesSelective401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class DestroyWithAssociatedResourcesSelectiveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  destroyWithAssociatedResourcesSelective401ApplicationJsonObject?: DestroyWithAssociatedResourcesSelective401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
