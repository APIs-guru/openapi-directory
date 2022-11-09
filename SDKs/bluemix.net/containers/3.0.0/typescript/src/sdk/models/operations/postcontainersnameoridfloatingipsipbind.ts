import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostContainersNameOrIdFloatingIpsIpBindPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ip" })
  ip: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name_or_id" })
  nameOrId: string;
}


export class PostContainersNameOrIdFloatingIpsIpBindHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class PostContainersNameOrIdFloatingIpsIpBindRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostContainersNameOrIdFloatingIpsIpBindPathParams;

  @Metadata()
  headers: PostContainersNameOrIdFloatingIpsIpBindHeaders;
}


export class PostContainersNameOrIdFloatingIpsIpBindResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
