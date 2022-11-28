import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ImagesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=query" })
  query: string;
}


export class Images200ApplicationJsonImageResultsImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alt" })
  alt?: string;

  @SpeakeasyMetadata({ data: "json, name=src" })
  src?: string;
}


export class Images200ApplicationJsonImageResultsLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class Images200ApplicationJsonImageResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: Images200ApplicationJsonImageResultsImage;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: Images200ApplicationJsonImageResultsLink;
}


export class Images200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answers" })
  answers?: string[];

  @SpeakeasyMetadata({ data: "json, name=image_results", elemType: Images200ApplicationJsonImageResults })
  imageResults?: Images200ApplicationJsonImageResults[];

  @SpeakeasyMetadata({ data: "json, name=results" })
  results?: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


export class ImagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ImagesPathParams;
}


export class ImagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  images200ApplicationJsonObject?: Images200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
