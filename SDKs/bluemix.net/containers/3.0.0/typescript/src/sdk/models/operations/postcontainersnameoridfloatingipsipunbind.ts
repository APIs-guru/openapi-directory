import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostContainersNameOrIdFloatingIpsIpUnbindPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ip" })
  ip: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name_or_id" })
  nameOrId: string;
}


export class PostContainersNameOrIdFloatingIpsIpUnbindHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class PostContainersNameOrIdFloatingIpsIpUnbindRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostContainersNameOrIdFloatingIpsIpUnbindPathParams;

  @SpeakeasyMetadata()
  headers: PostContainersNameOrIdFloatingIpsIpUnbindHeaders;
}


export class PostContainersNameOrIdFloatingIpsIpUnbindResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
