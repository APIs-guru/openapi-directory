import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV1CustomersIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetV1CustomersIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=needBalance" })
  needBalance?: boolean;
}


export class GetV1CustomersIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetV1CustomersIdPathParams;

  @Metadata()
  queryParams: GetV1CustomersIdQueryParams;
}


export class GetV1CustomersIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  customerDto?: shared.CustomerDto;

  @Metadata()
  statusCode: number;
}
