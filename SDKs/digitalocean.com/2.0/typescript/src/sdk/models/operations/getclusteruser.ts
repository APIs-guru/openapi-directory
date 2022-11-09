import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetClusterUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=cluster_id" })
  clusterId: string;
}


export class GetClusterUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetClusterUserPathParams;
}


export class GetClusterUser200ApplicationJsonKubernetesClusterUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=groups" })
  groups?: string[];

  @Metadata({ data: "json, name=username" })
  username?: string;
}


export class GetClusterUser200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=kubernetes_cluster_user" })
  kubernetesClusterUser?: GetClusterUser200ApplicationJsonKubernetesClusterUser;
}


export class GetClusterUser401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetClusterUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getClusterUser200ApplicationJsonObject?: GetClusterUser200ApplicationJson;

  @Metadata()
  getClusterUser401ApplicationJsonObject?: GetClusterUser401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
