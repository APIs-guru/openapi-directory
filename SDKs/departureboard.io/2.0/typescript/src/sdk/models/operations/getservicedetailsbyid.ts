import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetServiceDetailsByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceID" })
  serviceId: string;
}


export class GetServiceDetailsByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apiKey" })
  apiKey: string;
}


export class GetServiceDetailsByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetServiceDetailsByIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetServiceDetailsByIdQueryParams;
}


export class GetServiceDetailsByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
