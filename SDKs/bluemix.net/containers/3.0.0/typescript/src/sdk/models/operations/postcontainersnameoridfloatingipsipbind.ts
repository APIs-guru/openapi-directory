import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostContainersNameOrIdFloatingIpsIpBindPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ip" })
  ip: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name_or_id" })
  nameOrId: string;
}


export class PostContainersNameOrIdFloatingIpsIpBindHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class PostContainersNameOrIdFloatingIpsIpBindRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostContainersNameOrIdFloatingIpsIpBindPathParams;

  @SpeakeasyMetadata()
  headers: PostContainersNameOrIdFloatingIpsIpBindHeaders;
}


export class PostContainersNameOrIdFloatingIpsIpBindResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
