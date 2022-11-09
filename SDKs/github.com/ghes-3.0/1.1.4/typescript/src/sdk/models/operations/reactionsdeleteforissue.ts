import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReactionsDeleteForIssuePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=issue_number" })
  issueNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=reaction_id" })
  reactionId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReactionsDeleteForIssueRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReactionsDeleteForIssuePathParams;
}


export class ReactionsDeleteForIssueResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
