import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutRegistryNamespacesNamespacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=namespace" })
  namespace: string;
}


export class PutRegistryNamespacesNamespaceHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class PutRegistryNamespacesNamespaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutRegistryNamespacesNamespacePathParams;

  @Metadata()
  headers: PutRegistryNamespacesNamespaceHeaders;
}


export class PutRegistryNamespacesNamespaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  namespace?: shared.Namespace;

  @Metadata()
  statusCode: number;
}
