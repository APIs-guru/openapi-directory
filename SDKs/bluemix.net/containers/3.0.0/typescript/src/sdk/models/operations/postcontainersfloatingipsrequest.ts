import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostContainersFloatingIpsRequestHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class PostContainersFloatingIpsRequestRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostContainersFloatingIpsRequestHeaders;
}


export class PostContainersFloatingIpsRequestResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postContainersFloatingIpsRequest200ApplicationJsonString?: string;

  @Metadata()
  statusCode: number;
}
