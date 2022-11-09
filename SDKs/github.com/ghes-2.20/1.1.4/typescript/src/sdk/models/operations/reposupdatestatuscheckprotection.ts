import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposUpdateStatusCheckProtectionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=branch" })
  branch: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposUpdateStatusCheckProtectionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=contexts" })
  contexts?: string[];

  @Metadata({ data: "json, name=strict" })
  strict?: boolean;
}


export class ReposUpdateStatusCheckProtectionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposUpdateStatusCheckProtectionPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ReposUpdateStatusCheckProtectionRequestBody;
}


export class ReposUpdateStatusCheckProtectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  statusCheckPolicy?: shared.StatusCheckPolicy;

  @Metadata()
  validationError?: shared.ValidationError;
}
