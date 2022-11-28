import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostContainersGroupsNameOrIdMaproutePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name_or_id" })
  nameOrId: string;
}


export class PostContainersGroupsNameOrIdMaprouteHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class PostContainersGroupsNameOrIdMaprouteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostContainersGroupsNameOrIdMaproutePathParams;

  @SpeakeasyMetadata()
  headers: PostContainersGroupsNameOrIdMaprouteHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Route;
}


export class PostContainersGroupsNameOrIdMaprouteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  containersGroupsNameOrIdMaproutePostInfo?: shared.ContainersGroupsNameOrIdMaproutePostInfo;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
