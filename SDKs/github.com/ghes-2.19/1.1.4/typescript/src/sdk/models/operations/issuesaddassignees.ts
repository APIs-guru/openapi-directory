import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IssuesAddAssigneesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=issue_number" })
  issueNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class IssuesAddAssigneesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assignees" })
  assignees?: string[];
}


export class IssuesAddAssigneesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IssuesAddAssigneesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: IssuesAddAssigneesRequestBody;
}


export class IssuesAddAssigneesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  issueSimple?: shared.IssueSimple;
}
