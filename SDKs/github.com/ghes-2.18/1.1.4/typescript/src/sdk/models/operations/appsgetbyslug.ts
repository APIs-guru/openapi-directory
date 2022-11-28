import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AppsGetBySlugPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=app_slug" })
  appSlug: string;
}


export class AppsGetBySlug415ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class AppsGetBySlugRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AppsGetBySlugPathParams;
}


export class AppsGetBySlugResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  appsGetBySlug415ApplicationJsonObject?: AppsGetBySlug415ApplicationJson;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  integration?: Map<string, any>;
}
