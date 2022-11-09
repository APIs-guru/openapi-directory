import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostContainersNameOrIdFloatingIpsIpUnbindPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ip" })
  ip: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name_or_id" })
  nameOrId: string;
}


export class PostContainersNameOrIdFloatingIpsIpUnbindHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class PostContainersNameOrIdFloatingIpsIpUnbindRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostContainersNameOrIdFloatingIpsIpUnbindPathParams;

  @Metadata()
  headers: PostContainersNameOrIdFloatingIpsIpUnbindHeaders;
}


export class PostContainersNameOrIdFloatingIpsIpUnbindResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
