import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IssuesCreateLabelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class IssuesCreateLabelRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


export class IssuesCreateLabelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IssuesCreateLabelPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: IssuesCreateLabelRequestBody;
}


export class IssuesCreateLabelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  label?: shared.Label;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
