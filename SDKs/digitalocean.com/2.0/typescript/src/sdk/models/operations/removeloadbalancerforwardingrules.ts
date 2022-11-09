import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RemoveLoadBalancerForwardingRulesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=lb_id" })
  lbId: string;
}


export class RemoveLoadBalancerForwardingRulesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveLoadBalancerForwardingRulesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class RemoveLoadBalancerForwardingRules401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class RemoveLoadBalancerForwardingRulesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  removeLoadBalancerForwardingRules401ApplicationJsonObject?: RemoveLoadBalancerForwardingRules401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
