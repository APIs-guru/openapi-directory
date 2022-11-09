import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FilmographyTypeSearchReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=filmography_description" })
  filmographyDescription: string;
}


export class FilmographyTypeSearchReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FilmographyTypeSearchReadPathParams;
}


export class FilmographyTypeSearchReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
