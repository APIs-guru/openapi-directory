import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposCreateForkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposCreateForkRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=organization" })
  organization?: string;
}


export class ReposCreateForkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposCreateForkPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ReposCreateForkRequestBody;
}


export class ReposCreateForkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  fullRepository?: shared.FullRepository;

  @SpeakeasyMetadata()
  scimError?: shared.ScimError;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
