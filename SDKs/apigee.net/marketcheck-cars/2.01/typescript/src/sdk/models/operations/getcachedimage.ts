import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCachedImagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=imageID" })
  imageId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=listingID" })
  listingId: string;
}


export class GetCachedImageQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;
}


export class GetCachedImageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCachedImagePathParams;

  @Metadata()
  queryParams: GetCachedImageQueryParams;
}


export class GetCachedImageResponse extends SpeakeasyBase {
  @Metadata()
  cacheImageResponse?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
