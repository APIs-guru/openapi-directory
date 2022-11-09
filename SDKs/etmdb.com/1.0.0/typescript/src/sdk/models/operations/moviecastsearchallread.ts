import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MovieCastSearchallReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=param" })
  param: string;
}


export class MovieCastSearchallReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MovieCastSearchallReadPathParams;
}


export class MovieCastSearchallReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
