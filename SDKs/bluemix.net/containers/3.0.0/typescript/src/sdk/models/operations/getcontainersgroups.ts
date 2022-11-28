import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetContainersGroupsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class GetContainersGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetContainersGroupsHeaders;
}


export class GetContainersGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  containersGroupsGetListItems?: any[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
