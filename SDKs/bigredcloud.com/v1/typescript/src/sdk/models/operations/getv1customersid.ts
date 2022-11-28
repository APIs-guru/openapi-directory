import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV1CustomersIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetV1CustomersIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=needBalance" })
  needBalance?: boolean;
}


export class GetV1CustomersIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1CustomersIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetV1CustomersIdQueryParams;
}


export class GetV1CustomersIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customerDto?: shared.CustomerDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
