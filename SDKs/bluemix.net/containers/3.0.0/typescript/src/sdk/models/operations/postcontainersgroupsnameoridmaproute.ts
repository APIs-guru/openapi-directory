import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostContainersGroupsNameOrIdMaproutePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name_or_id" })
  nameOrId: string;
}


export class PostContainersGroupsNameOrIdMaprouteHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class PostContainersGroupsNameOrIdMaprouteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostContainersGroupsNameOrIdMaproutePathParams;

  @Metadata()
  headers: PostContainersGroupsNameOrIdMaprouteHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Route;
}


export class PostContainersGroupsNameOrIdMaprouteResponse extends SpeakeasyBase {
  @Metadata()
  containersGroupsNameOrIdMaproutePostInfo?: shared.ContainersGroupsNameOrIdMaproutePostInfo;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
