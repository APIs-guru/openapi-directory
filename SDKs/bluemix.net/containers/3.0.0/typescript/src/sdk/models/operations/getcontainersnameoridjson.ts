import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetContainersNameOrIdJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name_or_id" })
  nameOrId: string;
}


export class GetContainersNameOrIdJsonHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class GetContainersNameOrIdJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetContainersNameOrIdJsonPathParams;

  @SpeakeasyMetadata()
  headers: GetContainersNameOrIdJsonHeaders;
}


export class GetContainersNameOrIdJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  containerInfo?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
