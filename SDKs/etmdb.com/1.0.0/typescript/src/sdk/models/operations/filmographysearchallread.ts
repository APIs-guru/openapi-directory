import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FilmographySearchallReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=param" })
  param: string;
}


export class FilmographySearchallReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FilmographySearchallReadPathParams;
}


export class FilmographySearchallReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
