import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FilmographyTypeSearchReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=filmography_description" })
  filmographyDescription: string;
}


export class FilmographyTypeSearchReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FilmographyTypeSearchReadPathParams;
}


export class FilmographyTypeSearchReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
