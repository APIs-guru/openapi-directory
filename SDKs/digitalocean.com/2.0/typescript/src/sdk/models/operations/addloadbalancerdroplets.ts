import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddLoadBalancerDropletsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=lb_id" })
  lbId: string;
}


export class AddLoadBalancerDropletsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddLoadBalancerDropletsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Onev21loadBalancersPostRequestBodyContentApplication1jsonSchemaOneOf0AllOf0;
}


export class AddLoadBalancerDroplets401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class AddLoadBalancerDropletsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  addLoadBalancerDroplets401ApplicationJsonObject?: AddLoadBalancerDroplets401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
