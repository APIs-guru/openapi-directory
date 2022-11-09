import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListingsOnePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ecosystem_id" })
  ecosystemId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ListingsOneRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListingsOnePathParams;
}


export class ListingsOneResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getListingResponse?: shared.GetListingResponse;

  @Metadata()
  statusCode: number;
}
