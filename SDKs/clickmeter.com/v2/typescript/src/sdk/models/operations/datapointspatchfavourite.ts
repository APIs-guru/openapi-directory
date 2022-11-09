import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DataPointsPatchFavouritePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DataPointsPatchFavouriteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DataPointsPatchFavouritePathParams;
}


export class DataPointsPatchFavouriteResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
