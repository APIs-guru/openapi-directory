import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddKubernetesNodePoolPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=cluster_id" })
  clusterId: string;
}


export class AddKubernetesNodePoolRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddKubernetesNodePoolPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItems;
}


export class AddKubernetesNodePool401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class AddKubernetesNodePoolResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  addKubernetesNodePool201ApplicationJsonAny?: any;

  @Metadata()
  addKubernetesNodePool401ApplicationJsonObject?: AddKubernetesNodePool401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
