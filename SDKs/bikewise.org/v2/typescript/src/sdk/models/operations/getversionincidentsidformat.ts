import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetVersionIncidentsIdFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetVersionIncidentsIdFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVersionIncidentsIdFormatPathParams;
}


export class GetVersionIncidentsIdFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
