import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetVersionIncidentsIdFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetVersionIncidentsIdFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVersionIncidentsIdFormatPathParams;
}


export class GetVersionIncidentsIdFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
