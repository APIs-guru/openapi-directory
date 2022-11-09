import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SalesRepPutPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class SalesRepPutRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SalesRepPutPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SaleRepsDto;
}


export class SalesRepPutResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  salesRepPut200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
