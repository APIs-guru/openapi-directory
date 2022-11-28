import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRegistryNamespacesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class GetRegistryNamespacesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetRegistryNamespacesHeaders;
}


export class GetRegistryNamespacesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  namespace?: shared.Namespace;

  @SpeakeasyMetadata()
  statusCode: number;
}
