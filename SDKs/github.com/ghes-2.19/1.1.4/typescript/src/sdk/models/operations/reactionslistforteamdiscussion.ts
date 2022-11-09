import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReactionsListForTeamDiscussionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" })
  discussionNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}

export enum ReactionsListForTeamDiscussionContentEnum {
    Plus1 = "+1"
,    Minus1 = "-1"
,    Laugh = "laugh"
,    Confused = "confused"
,    Heart = "heart"
,    Hooray = "hooray"
,    Rocket = "rocket"
,    Eyes = "eyes"
}


export class ReactionsListForTeamDiscussionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=content" })
  content?: ReactionsListForTeamDiscussionContentEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ReactionsListForTeamDiscussionHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=accept" })
  accept: string;
}


export class ReactionsListForTeamDiscussionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReactionsListForTeamDiscussionPathParams;

  @Metadata()
  queryParams: ReactionsListForTeamDiscussionQueryParams;

  @Metadata()
  headers: ReactionsListForTeamDiscussionHeaders;
}


export class ReactionsListForTeamDiscussionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Reaction })
  reactions?: shared.Reaction[];
}
