import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetListingHeavyEquipmentIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetListingHeavyEquipmentIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;
}


export class GetListingHeavyEquipmentIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetListingHeavyEquipmentIdPathParams;

  @Metadata()
  queryParams: GetListingHeavyEquipmentIdQueryParams;
}


export class GetListingHeavyEquipmentIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  heavyEquipmentsListing?: shared.HeavyEquipmentsListing;

  @Metadata()
  statusCode: number;
}
