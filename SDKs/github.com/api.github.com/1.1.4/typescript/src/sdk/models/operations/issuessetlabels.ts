import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IssuesSetLabelsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=issue_number" })
  issueNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class IssuesSetLabelsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=labels" })
  labels?: string[];
}


export class IssuesSetLabelsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IssuesSetLabelsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: IssuesSetLabelsRequestBody;
}


export class IssuesSetLabelsResponse extends SpeakeasyBase {
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
