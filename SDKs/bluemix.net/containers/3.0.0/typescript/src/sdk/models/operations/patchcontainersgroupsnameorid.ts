import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PatchContainersGroupsNameOrIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name_or_id" })
  nameOrId: string;
}


export class PatchContainersGroupsNameOrIdHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class PatchContainersGroupsNameOrIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchContainersGroupsNameOrIdPathParams;

  @Metadata()
  headers: PatchContainersGroupsNameOrIdHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class PatchContainersGroupsNameOrIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
