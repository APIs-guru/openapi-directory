import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostContainersGroupsNameOrIdUnmaproutePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name_or_id" })
  nameOrId: string;
}


export class PostContainersGroupsNameOrIdUnmaprouteHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class PostContainersGroupsNameOrIdUnmaprouteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostContainersGroupsNameOrIdUnmaproutePathParams;

  @Metadata()
  headers: PostContainersGroupsNameOrIdUnmaprouteHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Route;
}


export class PostContainersGroupsNameOrIdUnmaprouteResponse extends SpeakeasyBase {
  @Metadata()
  containersGroupsNameOrIdMaproutePostInfo?: shared.ContainersGroupsNameOrIdMaproutePostInfo;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
