import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IssuesRemoveAssigneesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=issue_number" })
  issueNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class IssuesRemoveAssigneesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assignees" })
  assignees?: string[];
}


export class IssuesRemoveAssigneesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IssuesRemoveAssigneesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: IssuesRemoveAssigneesRequestBody;
}


export class IssuesRemoveAssigneesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  issueSimple?: shared.IssueSimple;
}
