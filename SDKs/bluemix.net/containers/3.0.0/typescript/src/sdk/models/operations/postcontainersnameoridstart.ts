import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostContainersNameOrIdStartPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name_or_id" })
  nameOrId: string;
}


export class PostContainersNameOrIdStartHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class PostContainersNameOrIdStartRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostContainersNameOrIdStartPathParams;

  @SpeakeasyMetadata()
  headers: PostContainersNameOrIdStartHeaders;
}


export class PostContainersNameOrIdStartResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
