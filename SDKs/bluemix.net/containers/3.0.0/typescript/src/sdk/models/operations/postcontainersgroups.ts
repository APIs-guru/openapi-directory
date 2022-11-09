import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostContainersGroupsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class PostContainersGroupsRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostContainersGroupsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class PostContainersGroupsResponse extends SpeakeasyBase {
  @Metadata()
  containersGroupsPostCreatedInfo?: shared.ContainersGroupsPostCreatedInfo;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
