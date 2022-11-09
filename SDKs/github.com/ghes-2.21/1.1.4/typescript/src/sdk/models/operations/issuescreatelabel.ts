import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IssuesCreateLabelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class IssuesCreateLabelRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}


export class IssuesCreateLabelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IssuesCreateLabelPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: IssuesCreateLabelRequestBody;
}


export class IssuesCreateLabelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  label?: shared.Label;

  @Metadata()
  validationError?: shared.ValidationError;
}
