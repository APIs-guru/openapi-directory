import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostContainersFloatingIpsIpReleasePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ip" })
  ip: string;
}


export class PostContainersFloatingIpsIpReleaseHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class PostContainersFloatingIpsIpReleaseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostContainersFloatingIpsIpReleasePathParams;

  @Metadata()
  headers: PostContainersFloatingIpsIpReleaseHeaders;
}


export class PostContainersFloatingIpsIpReleaseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
