import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MovieCastSearchallReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=param" })
  param: string;
}


export class MovieCastSearchallReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MovieCastSearchallReadPathParams;
}


export class MovieCastSearchallReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
