import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IssuesSetLabelsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=issue_number" })
  issueNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class IssuesSetLabelsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: string[];
}


export class IssuesSetLabelsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IssuesSetLabelsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: IssuesSetLabelsRequestBody;
}


export class IssuesSetLabelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata({ elemType: shared.Label })
  labels?: shared.Label[];

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
