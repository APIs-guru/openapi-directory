import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostFloatingIpActionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=floating_ip" })
  floatingIp: string;
}

export enum PostFloatingIpActionRequestBody1TypeEnum {
    Assign = "assign"
,    Unassign = "unassign"
}


export class PostFloatingIpActionRequestBody1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type: PostFloatingIpActionRequestBody1TypeEnum;
}

export enum PostFloatingIpActionRequestBody2TypeEnum {
    Assign = "assign"
,    Unassign = "unassign"
}


export class PostFloatingIpActionRequestBody2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=droplet_id" })
  dropletId: number;

  @Metadata({ data: "json, name=type" })
  type: PostFloatingIpActionRequestBody2TypeEnum;
}


export class PostFloatingIpActionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostFloatingIpActionPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostFloatingIpAction401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class PostFloatingIpActionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  postFloatingIpAction201ApplicationJsonAny?: any;

  @Metadata()
  postFloatingIpAction401ApplicationJsonObject?: PostFloatingIpAction401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
