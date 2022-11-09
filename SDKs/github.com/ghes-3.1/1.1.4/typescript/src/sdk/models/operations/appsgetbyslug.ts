import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AppsGetBySlugPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=app_slug" })
  appSlug: string;
}


export class AppsGetBySlugRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AppsGetBySlugPathParams;
}


export class AppsGetBySlug415ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class AppsGetBySlugResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  appsGetBySlug415ApplicationJsonObject?: AppsGetBySlug415ApplicationJson;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  integration?: Map<string, any>;
}
