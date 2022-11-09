import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetContainersNameOrIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name_or_id" })
  nameOrId: string;
}


export class GetContainersNameOrIdJsonHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class GetContainersNameOrIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetContainersNameOrIdJsonPathParams;

  @Metadata()
  headers: GetContainersNameOrIdJsonHeaders;
}


export class GetContainersNameOrIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  containerInfo?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
