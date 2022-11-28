import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IssuesUpdateLabelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class IssuesUpdateLabelRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=new_name" })
  newName?: string;
}


export class IssuesUpdateLabelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IssuesUpdateLabelPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: IssuesUpdateLabelRequestBody;
}


export class IssuesUpdateLabelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  label?: shared.Label;
}
