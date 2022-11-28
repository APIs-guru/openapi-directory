import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListingsOnePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ecosystem_id" })
  ecosystemId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ListingsOneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListingsOnePathParams;
}


export class ListingsOneResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getListingResponse?: shared.GetListingResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
