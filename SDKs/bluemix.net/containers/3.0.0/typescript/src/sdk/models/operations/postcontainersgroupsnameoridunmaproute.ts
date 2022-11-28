import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostContainersGroupsNameOrIdUnmaproutePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name_or_id" })
  nameOrId: string;
}


export class PostContainersGroupsNameOrIdUnmaprouteHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class PostContainersGroupsNameOrIdUnmaprouteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostContainersGroupsNameOrIdUnmaproutePathParams;

  @SpeakeasyMetadata()
  headers: PostContainersGroupsNameOrIdUnmaprouteHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Route;
}


export class PostContainersGroupsNameOrIdUnmaprouteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  containersGroupsNameOrIdMaproutePostInfo?: shared.ContainersGroupsNameOrIdMaproutePostInfo;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
