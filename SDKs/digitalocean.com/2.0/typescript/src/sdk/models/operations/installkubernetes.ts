import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class InstallKubernetesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=addon_slugs" })
  addonSlugs: string[];

  @Metadata({ data: "json, name=cluster_uuid" })
  clusterUuid: string;
}


export class InstallKubernetesRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: InstallKubernetesRequestBody;
}


export class InstallKubernetes200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class InstallKubernetes401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class InstallKubernetesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  installKubernetes200ApplicationJsonObject?: InstallKubernetes200ApplicationJson;

  @Metadata()
  installKubernetes401ApplicationJsonObject?: InstallKubernetes401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
