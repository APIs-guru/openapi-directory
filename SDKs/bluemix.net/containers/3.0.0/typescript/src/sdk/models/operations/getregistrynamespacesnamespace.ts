import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRegistryNamespacesNamespacePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=namespace" })
  namespace: string;
}


export class GetRegistryNamespacesNamespaceHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class GetRegistryNamespacesNamespaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRegistryNamespacesNamespacePathParams;

  @SpeakeasyMetadata()
  headers: GetRegistryNamespacesNamespaceHeaders;
}


export class GetRegistryNamespacesNamespaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  namespace?: shared.Namespace;

  @SpeakeasyMetadata()
  statusCode: number;
}
