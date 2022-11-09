import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReactionsListForTeamDiscussionInOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" })
  discussionNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_slug" })
  teamSlug: string;
}

export enum ReactionsListForTeamDiscussionInOrgContentEnum {
    Plus1 = "+1"
,    Minus1 = "-1"
,    Laugh = "laugh"
,    Confused = "confused"
,    Heart = "heart"
,    Hooray = "hooray"
,    Rocket = "rocket"
,    Eyes = "eyes"
}


export class ReactionsListForTeamDiscussionInOrgQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=content" })
  content?: ReactionsListForTeamDiscussionInOrgContentEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ReactionsListForTeamDiscussionInOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReactionsListForTeamDiscussionInOrgPathParams;

  @Metadata()
  queryParams: ReactionsListForTeamDiscussionInOrgQueryParams;
}


export class ReactionsListForTeamDiscussionInOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Reaction })
  reactions?: shared.Reaction[];
}
