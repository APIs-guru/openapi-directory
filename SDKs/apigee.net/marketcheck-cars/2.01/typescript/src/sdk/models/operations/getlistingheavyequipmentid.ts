import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetListingHeavyEquipmentIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetListingHeavyEquipmentIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;
}


export class GetListingHeavyEquipmentIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetListingHeavyEquipmentIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetListingHeavyEquipmentIdQueryParams;
}


export class GetListingHeavyEquipmentIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  heavyEquipmentsListing?: shared.HeavyEquipmentsListing;

  @SpeakeasyMetadata()
  statusCode: number;
}
