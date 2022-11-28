import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SalesRepPutPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class SalesRepPutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SalesRepPutPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SaleRepsDto;
}


export class SalesRepPutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  salesRepPut200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
