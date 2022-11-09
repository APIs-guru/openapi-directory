import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetServerFollowingQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=actorType" })
  actorType?: shared.ActorTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: shared.FollowStateEnum;
}


export class GetServerFollowingRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetServerFollowingQueryParams;
}


export class GetServerFollowing200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: any[];

  @Metadata({ data: "json, name=total" })
  total?: number;
}


export class GetServerFollowingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getServerFollowing200ApplicationJsonObject?: GetServerFollowing200ApplicationJson;

  @Metadata()
  statusCode: number;
}
