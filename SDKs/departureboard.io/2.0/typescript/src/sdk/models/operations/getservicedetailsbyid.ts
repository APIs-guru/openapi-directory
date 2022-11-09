import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetServiceDetailsByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serviceID" })
  serviceId: string;
}


export class GetServiceDetailsByIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=apiKey" })
  apiKey: string;
}


export class GetServiceDetailsByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetServiceDetailsByIdPathParams;

  @Metadata()
  queryParams: GetServiceDetailsByIdQueryParams;
}


export class GetServiceDetailsByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
