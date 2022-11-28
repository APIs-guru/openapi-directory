import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV1SuppliersIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetV1SuppliersIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=needBalance" })
  needBalance?: boolean;
}


export class GetV1SuppliersIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1SuppliersIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetV1SuppliersIdQueryParams;
}


export class GetV1SuppliersIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  supplierDto?: shared.SupplierDto;
}
