import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposCreateDeployKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposCreateDeployKeyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=read_only" })
  readOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class ReposCreateDeployKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposCreateDeployKeyPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ReposCreateDeployKeyRequestBody;
}


export class ReposCreateDeployKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deployKey?: shared.DeployKey;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
