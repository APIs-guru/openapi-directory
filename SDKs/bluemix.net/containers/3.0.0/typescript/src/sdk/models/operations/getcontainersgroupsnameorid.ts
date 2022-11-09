import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetContainersGroupsNameOrIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name_or_id" })
  nameOrId: string;
}


export class GetContainersGroupsNameOrIdHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class GetContainersGroupsNameOrIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetContainersGroupsNameOrIdPathParams;

  @Metadata()
  headers: GetContainersGroupsNameOrIdHeaders;
}


export class GetContainersGroupsNameOrIdResponse extends SpeakeasyBase {
  @Metadata()
  containersGroupsNameOrIdGetDetails?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
