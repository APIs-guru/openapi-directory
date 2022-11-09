import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposCreateDeployKeyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposCreateDeployKeyRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=read_only" })
  readOnly?: boolean;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


export class ReposCreateDeployKeyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposCreateDeployKeyPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ReposCreateDeployKeyRequestBody;
}


export class ReposCreateDeployKeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  deployKey?: shared.DeployKey;

  @Metadata()
  validationError?: shared.ValidationError;
}
