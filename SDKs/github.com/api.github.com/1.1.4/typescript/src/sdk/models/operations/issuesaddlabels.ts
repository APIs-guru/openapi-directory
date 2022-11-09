import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IssuesAddLabelsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=issue_number" })
  issueNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class IssuesAddLabelsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=labels" })
  labels: string[];
}


export class IssuesAddLabelsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IssuesAddLabelsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: IssuesAddLabelsRequestBody;
}


export class IssuesAddLabelsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata({ elemType: shared.Label })
  labels?: shared.Label[];

  @Metadata()
  validationError?: shared.ValidationError;
}
