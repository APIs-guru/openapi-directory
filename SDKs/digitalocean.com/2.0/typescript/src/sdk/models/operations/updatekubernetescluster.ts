import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateKubernetesClusterPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=cluster_id" })
  clusterId: string;
}


export class UpdateKubernetesClusterRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=auto_upgrade" })
  autoUpgrade?: boolean;

  @Metadata({ data: "json, name=maintenance_policy" })
  maintenancePolicy?: shared.Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesMaintenancePolicy;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=surge_upgrade" })
  surgeUpgrade?: boolean;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];
}


export class UpdateKubernetesClusterRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateKubernetesClusterPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateKubernetesClusterRequestBody;
}


export class UpdateKubernetesCluster401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class UpdateKubernetesClusterResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateKubernetesCluster202ApplicationJsonAny?: any;

  @Metadata()
  updateKubernetesCluster401ApplicationJsonObject?: UpdateKubernetesCluster401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
