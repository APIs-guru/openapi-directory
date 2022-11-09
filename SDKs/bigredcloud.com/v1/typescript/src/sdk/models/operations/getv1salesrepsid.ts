import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV1SalesRepsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetV1SalesRepsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetV1SalesRepsIdPathParams;
}


export class GetV1SalesRepsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  saleRepsDto?: shared.SaleRepsDto;

  @Metadata()
  statusCode: number;
}
