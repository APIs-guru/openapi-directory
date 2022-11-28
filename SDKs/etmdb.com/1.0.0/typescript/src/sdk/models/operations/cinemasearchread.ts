import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CinemaSearchReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CinemaSearchReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CinemaSearchReadPathParams;
}


export class CinemaSearchReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
