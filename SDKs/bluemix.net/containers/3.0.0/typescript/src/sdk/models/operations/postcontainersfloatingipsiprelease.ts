import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostContainersFloatingIpsIpReleasePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ip" })
  ip: string;
}


export class PostContainersFloatingIpsIpReleaseHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class PostContainersFloatingIpsIpReleaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostContainersFloatingIpsIpReleasePathParams;

  @SpeakeasyMetadata()
  headers: PostContainersFloatingIpsIpReleaseHeaders;
}


export class PostContainersFloatingIpsIpReleaseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
