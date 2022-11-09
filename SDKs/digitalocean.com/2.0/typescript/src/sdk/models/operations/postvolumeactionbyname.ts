import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostVolumeActionByNameQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}

export enum PostVolumeActionByNameRequestBody1TypeEnum {
    Attach = "attach"
,    Detach = "detach"
,    Resize = "resize"
}


export class PostVolumeActionByNameRequestBody1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=droplet_id" })
  dropletId: number;

  @Metadata({ data: "json, name=region" })
  region?: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=type" })
  type: PostVolumeActionByNameRequestBody1TypeEnum;
}

export enum PostVolumeActionByNameRequestBody2TypeEnum {
    Attach = "attach"
,    Detach = "detach"
,    Resize = "resize"
}


export class PostVolumeActionByNameRequestBody2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=droplet_id" })
  dropletId: number;

  @Metadata({ data: "json, name=region" })
  region?: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum;

  @Metadata({ data: "json, name=type" })
  type: PostVolumeActionByNameRequestBody2TypeEnum;
}


export class PostVolumeActionByNameRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostVolumeActionByNameQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class PostVolumeActionByName401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class PostVolumeActionByNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  postVolumeActionByName202ApplicationJsonAny?: any;

  @Metadata()
  postVolumeActionByName401ApplicationJsonObject?: PostVolumeActionByName401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
