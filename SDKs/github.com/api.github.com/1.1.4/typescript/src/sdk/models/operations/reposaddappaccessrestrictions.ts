import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposAddAppAccessRestrictionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=branch" })
  branch: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposAddAppAccessRestrictionsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=apps" })
  apps: string[];
}


export class ReposAddAppAccessRestrictionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposAddAppAccessRestrictionsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ReposAddAppAccessRestrictionsRequestBody;
}


export class ReposAddAppAccessRestrictionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  integrations?: Map<string, any>[];

  @Metadata()
  validationError?: shared.ValidationError;
}
