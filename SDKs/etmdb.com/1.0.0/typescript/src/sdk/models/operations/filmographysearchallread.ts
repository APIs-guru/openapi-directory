import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FilmographySearchallReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=param" })
  param: string;
}


export class FilmographySearchallReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FilmographySearchallReadPathParams;
}


export class FilmographySearchallReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
