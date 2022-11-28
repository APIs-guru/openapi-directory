import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV1SalesRepsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetV1SalesRepsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1SalesRepsIdPathParams;
}


export class GetV1SalesRepsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  saleRepsDto?: shared.SaleRepsDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
