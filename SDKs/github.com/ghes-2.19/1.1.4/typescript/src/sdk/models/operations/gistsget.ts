import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GistsGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=gist_id" })
  gistId: string;
}


export class GistsGet403ApplicationJsonBlock extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}


export class GistsGet403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=block" })
  block?: GistsGet403ApplicationJsonBlock;

  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GistsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GistsGetPathParams;
}


export class GistsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  gistSimple?: shared.GistSimple;

  @SpeakeasyMetadata()
  gistsGet403ApplicationJsonObject?: GistsGet403ApplicationJson;
}
