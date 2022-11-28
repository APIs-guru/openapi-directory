import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutRegistryNamespacesNamespacePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=namespace" })
  namespace: string;
}


export class PutRegistryNamespacesNamespaceHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class PutRegistryNamespacesNamespaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutRegistryNamespacesNamespacePathParams;

  @SpeakeasyMetadata()
  headers: PutRegistryNamespacesNamespaceHeaders;
}


export class PutRegistryNamespacesNamespaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  namespace?: shared.Namespace;

  @SpeakeasyMetadata()
  statusCode: number;
}
