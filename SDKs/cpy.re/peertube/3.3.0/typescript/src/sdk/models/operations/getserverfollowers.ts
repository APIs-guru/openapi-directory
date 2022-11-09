import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetServerFollowersQueryParams extends SpeakeasyBase {
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


export class GetServerFollowersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetServerFollowersQueryParams;
}


export class GetServerFollowers200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: any[];

  @Metadata({ data: "json, name=total" })
  total?: number;
}


export class GetServerFollowersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getServerFollowers200ApplicationJsonObject?: GetServerFollowers200ApplicationJson;

  @Metadata()
  statusCode: number;
}
