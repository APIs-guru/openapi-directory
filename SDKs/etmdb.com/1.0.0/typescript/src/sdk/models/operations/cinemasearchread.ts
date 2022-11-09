import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CinemaSearchReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CinemaSearchReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CinemaSearchReadPathParams;
}


export class CinemaSearchReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
