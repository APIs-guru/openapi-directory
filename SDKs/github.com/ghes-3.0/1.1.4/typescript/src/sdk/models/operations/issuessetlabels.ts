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


export class IssuesSetLabelsRequestBody1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=labels" })
  labels?: string[];
}


export class IssuesSetLabelsRequestBody3Labels extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;
}


export class IssuesSetLabelsRequestBody3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=labels", elemType: operations.IssuesSetLabelsRequestBody3Labels })
  labels?: IssuesSetLabelsRequestBody3Labels[];
}


export class IssuesSetLabelsRequestBody4 extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;
}


export class IssuesSetLabelsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IssuesSetLabelsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
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
