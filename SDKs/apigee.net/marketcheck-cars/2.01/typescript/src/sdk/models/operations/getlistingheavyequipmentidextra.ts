import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetListingHeavyEquipmentIdExtraPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetListingHeavyEquipmentIdExtraQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;
}


export class GetListingHeavyEquipmentIdExtraRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetListingHeavyEquipmentIdExtraPathParams;

  @SpeakeasyMetadata()
  queryParams: GetListingHeavyEquipmentIdExtraQueryParams;
}


export class GetListingHeavyEquipmentIdExtraResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  listingExtraAttributes?: shared.ListingExtraAttributes;

  @SpeakeasyMetadata()
  statusCode: number;
}
