import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetContainersGroupsNameOrIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name_or_id" })
  nameOrId: string;
}


export class GetContainersGroupsNameOrIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class GetContainersGroupsNameOrIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetContainersGroupsNameOrIdPathParams;

  @SpeakeasyMetadata()
  headers: GetContainersGroupsNameOrIdHeaders;
}


export class GetContainersGroupsNameOrIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  containersGroupsNameOrIdGetDetails?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
