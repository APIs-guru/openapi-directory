import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PatchContainersGroupsNameOrIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name_or_id" })
  nameOrId: string;
}


export class PatchContainersGroupsNameOrIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class PatchContainersGroupsNameOrIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchContainersGroupsNameOrIdPathParams;

  @SpeakeasyMetadata()
  headers: PatchContainersGroupsNameOrIdHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class PatchContainersGroupsNameOrIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
