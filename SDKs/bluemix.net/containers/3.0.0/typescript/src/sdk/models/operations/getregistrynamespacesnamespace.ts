import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRegistryNamespacesNamespacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=namespace" })
  namespace: string;
}


export class GetRegistryNamespacesNamespaceHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class GetRegistryNamespacesNamespaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRegistryNamespacesNamespacePathParams;

  @Metadata()
  headers: GetRegistryNamespacesNamespaceHeaders;
}


export class GetRegistryNamespacesNamespaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  namespace?: shared.Namespace;

  @Metadata()
  statusCode: number;
}
