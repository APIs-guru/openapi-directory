import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IssuesRemoveAssigneesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=issue_number" })
  issueNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class IssuesRemoveAssigneesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=assignees" })
  assignees?: string[];
}


export class IssuesRemoveAssigneesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IssuesRemoveAssigneesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: IssuesRemoveAssigneesRequestBody;
}


export class IssuesRemoveAssigneesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  issueSimple?: shared.IssueSimple;
}
