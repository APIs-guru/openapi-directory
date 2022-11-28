import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IssuesAddLabelsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=issue_number" })
  issueNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class IssuesAddLabelsRequestBody1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: string[];
}


export class IssuesAddLabelsRequestBody3Labels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


export class IssuesAddLabelsRequestBody3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labels", elemType: IssuesAddLabelsRequestBody3Labels })
  labels?: IssuesAddLabelsRequestBody3Labels[];
}


export class IssuesAddLabelsRequestBody4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


export class IssuesAddLabelsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IssuesAddLabelsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class IssuesAddLabelsResponse extends SpeakeasyBase {
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
