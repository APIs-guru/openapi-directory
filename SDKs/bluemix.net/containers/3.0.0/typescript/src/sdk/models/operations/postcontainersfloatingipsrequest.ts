import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostContainersFloatingIpsRequestHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class PostContainersFloatingIpsRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostContainersFloatingIpsRequestHeaders;
}


export class PostContainersFloatingIpsRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postContainersFloatingIpsRequest200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
