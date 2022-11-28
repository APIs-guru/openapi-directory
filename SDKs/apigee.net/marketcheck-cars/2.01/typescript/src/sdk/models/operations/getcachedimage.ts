import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCachedImagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=imageID" })
  imageId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=listingID" })
  listingId: string;
}


export class GetCachedImageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;
}


export class GetCachedImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCachedImagePathParams;

  @SpeakeasyMetadata()
  queryParams: GetCachedImageQueryParams;
}


export class GetCachedImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cacheImageResponse?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
