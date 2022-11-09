import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRegistryNamespacesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class GetRegistryNamespacesRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetRegistryNamespacesHeaders;
}


export class GetRegistryNamespacesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  namespace?: shared.Namespace;

  @Metadata()
  statusCode: number;
}
