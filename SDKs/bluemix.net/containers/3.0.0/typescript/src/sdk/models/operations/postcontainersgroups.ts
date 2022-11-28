import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostContainersGroupsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class PostContainersGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostContainersGroupsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class PostContainersGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  containersGroupsPostCreatedInfo?: shared.ContainersGroupsPostCreatedInfo;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
