import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetListingMotorcycleIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetListingMotorcycleIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;
}


export class GetListingMotorcycleIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetListingMotorcycleIdPathParams;

  @Metadata()
  queryParams: GetListingMotorcycleIdQueryParams;
}


export class GetListingMotorcycleIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  motorcycleListing?: shared.MotorcycleListing;

  @Metadata()
  statusCode: number;
}
