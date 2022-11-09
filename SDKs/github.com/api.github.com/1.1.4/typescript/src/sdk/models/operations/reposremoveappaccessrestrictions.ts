import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposRemoveAppAccessRestrictionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=branch" })
  branch: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposRemoveAppAccessRestrictionsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=apps" })
  apps: string[];
}


export class ReposRemoveAppAccessRestrictionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposRemoveAppAccessRestrictionsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ReposRemoveAppAccessRestrictionsRequestBody;
}


export class ReposRemoveAppAccessRestrictionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  integrations?: Map<string, any>[];

  @Metadata()
  validationError?: shared.ValidationError;
}
