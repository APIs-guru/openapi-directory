import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposDeletePagesSitePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposDeletePagesSiteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposDeletePagesSitePathParams;
}


export class ReposDeletePagesSite415ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class ReposDeletePagesSiteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  reposDeletePagesSite415ApplicationJsonObject?: ReposDeletePagesSite415ApplicationJson;

  @Metadata()
  validationError?: shared.ValidationError;
}
