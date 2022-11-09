import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateCdnEndpointPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=cdn_id" })
  cdnId: string;
}


export class UpdateCdnEndpointRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificate_id" })
  certificateId?: string;

  @Metadata({ data: "json, name=custom_domain" })
  customDomain?: string;

  @Metadata({ data: "json, name=ttl" })
  ttl?: number;
}


export class UpdateCdnEndpointRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateCdnEndpointPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateCdnEndpointRequestBody;
}


export class UpdateCdnEndpoint401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class UpdateCdnEndpointResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateCdnEndpoint202ApplicationJsonAny?: any;

  @Metadata()
  updateCdnEndpoint401ApplicationJsonObject?: UpdateCdnEndpoint401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
