import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IssuesRemoveAllLabelsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=issue_number" })
  issueNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class IssuesRemoveAllLabelsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IssuesRemoveAllLabelsPathParams;
}


export class IssuesRemoveAllLabelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;
}
