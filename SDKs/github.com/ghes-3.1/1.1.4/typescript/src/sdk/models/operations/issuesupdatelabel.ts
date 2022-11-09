import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IssuesUpdateLabelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class IssuesUpdateLabelRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=new_name" })
  newName?: string;
}


export class IssuesUpdateLabelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IssuesUpdateLabelPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: IssuesUpdateLabelRequestBody;
}


export class IssuesUpdateLabelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  label?: shared.Label;
}
