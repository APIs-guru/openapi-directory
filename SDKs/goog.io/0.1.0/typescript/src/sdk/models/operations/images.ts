import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ImagesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=query" })
  query: string;
}


export class ImagesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ImagesPathParams;
}


export class Images200ApplicationJsonImageResultsImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=alt" })
  alt?: string;

  @Metadata({ data: "json, name=src" })
  src?: string;
}


export class Images200ApplicationJsonImageResultsLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain" })
  domain?: string;

  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


export class Images200ApplicationJsonImageResults extends SpeakeasyBase {
  @Metadata({ data: "json, name=image" })
  image?: Images200ApplicationJsonImageResultsImage;

  @Metadata({ data: "json, name=link" })
  link?: Images200ApplicationJsonImageResultsLink;
}


export class Images200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=answers" })
  answers?: string[];

  @Metadata({ data: "json, name=image_results", elemType: operations.Images200ApplicationJsonImageResults })
  imageResults?: Images200ApplicationJsonImageResults[];

  @Metadata({ data: "json, name=results" })
  results?: Map<string, any>[];

  @Metadata({ data: "json, name=total" })
  total?: number;
}


export class ImagesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  images200ApplicationJsonObject?: Images200ApplicationJson;

  @Metadata()
  statusCode: number;
}
