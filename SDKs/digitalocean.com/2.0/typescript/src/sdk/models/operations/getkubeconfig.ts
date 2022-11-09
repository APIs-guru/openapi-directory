import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetKubeconfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=cluster_id" })
  clusterId: string;
}


export class GetKubeconfigQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=expiry_seconds" })
  expirySeconds?: number;
}


export class GetKubeconfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetKubeconfigPathParams;

  @Metadata()
  queryParams: GetKubeconfigQueryParams;
}


export class GetKubeconfig401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetKubeconfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getKubeconfig200ApplicationYamlString?: string;

  @Metadata()
  getKubeconfig401ApplicationJsonObject?: GetKubeconfig401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
