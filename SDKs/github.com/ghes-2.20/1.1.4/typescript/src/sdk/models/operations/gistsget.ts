import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GistsGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=gist_id" })
  gistId: string;
}


export class GistsGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GistsGetPathParams;
}


export class GistsGet403ApplicationJsonBlock extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;
}


export class GistsGet403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=block" })
  block?: GistsGet403ApplicationJsonBlock;

  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GistsGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  gistSimple?: shared.GistSimple;

  @Metadata()
  gistsGet403ApplicationJsonObject?: GistsGet403ApplicationJson;
}
