import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetContainersGroupsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class GetContainersGroupsRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetContainersGroupsHeaders;
}


export class GetContainersGroupsResponse extends SpeakeasyBase {
  @Metadata()
  containersGroupsGetListItems?: any[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
