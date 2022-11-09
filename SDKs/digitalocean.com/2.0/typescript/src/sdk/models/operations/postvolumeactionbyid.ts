import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostVolumeActionByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=volume_id" })
  volumeId: string;
}


export class PostVolumeActionByIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}

export enum PostVolumeActionByIdRequestBody3TypeEnum {
    Attach = "attach"
,    Detach = "detach"
,    Resize = "resize"
}


export class PostVolumeActionByIdRequestBody3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=region" })
  region?: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum;

  @Metadata({ data: "json, name=size_gigabytes" })
  sizeGigabytes: number;

  @Metadata({ data: "json, name=type" })
  type: PostVolumeActionByIdRequestBody3TypeEnum;
}


export class PostVolumeActionByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostVolumeActionByIdPathParams;

  @Metadata()
  queryParams: PostVolumeActionByIdQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class PostVolumeActionById401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class PostVolumeActionByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  postVolumeActionById202ApplicationJsonAny?: any;

  @Metadata()
  postVolumeActionById401ApplicationJsonObject?: PostVolumeActionById401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
