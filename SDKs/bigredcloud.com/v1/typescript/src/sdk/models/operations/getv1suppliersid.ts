import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV1SuppliersIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetV1SuppliersIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=needBalance" })
  needBalance?: boolean;
}


export class GetV1SuppliersIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetV1SuppliersIdPathParams;

  @Metadata()
  queryParams: GetV1SuppliersIdQueryParams;
}


export class GetV1SuppliersIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  supplierDto?: shared.SupplierDto;
}
