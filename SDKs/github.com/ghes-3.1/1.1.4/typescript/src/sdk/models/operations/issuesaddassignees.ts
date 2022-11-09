import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IssuesAddAssigneesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=issue_number" })
  issueNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class IssuesAddAssigneesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=assignees" })
  assignees?: string[];
}


export class IssuesAddAssigneesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IssuesAddAssigneesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: IssuesAddAssigneesRequestBody;
}


export class IssuesAddAssigneesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  issueSimple?: shared.IssueSimple;
}
