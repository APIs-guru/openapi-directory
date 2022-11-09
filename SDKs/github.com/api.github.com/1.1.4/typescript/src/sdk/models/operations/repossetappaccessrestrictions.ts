import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposSetAppAccessRestrictionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=branch" })
  branch: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposSetAppAccessRestrictionsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=apps" })
  apps: string[];
}


export class ReposSetAppAccessRestrictionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposSetAppAccessRestrictionsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ReposSetAppAccessRestrictionsRequestBody;
}


export class ReposSetAppAccessRestrictionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  integrations?: Map<string, any>[];

  @Metadata()
  validationError?: shared.ValidationError;
}
