import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetListingHeavyEquipmentIdMediaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetListingHeavyEquipmentIdMediaQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;
}


export class GetListingHeavyEquipmentIdMediaRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetListingHeavyEquipmentIdMediaPathParams;

  @Metadata()
  queryParams: GetListingHeavyEquipmentIdMediaQueryParams;
}


export class GetListingHeavyEquipmentIdMediaResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  listingMedia?: shared.ListingMedia;

  @Metadata()
  statusCode: number;
}
