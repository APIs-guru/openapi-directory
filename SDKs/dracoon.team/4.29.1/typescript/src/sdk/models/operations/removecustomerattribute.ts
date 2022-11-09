import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RemoveCustomerAttributePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=customer_id" })
  customerId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=key" })
  key: string;
}


export class RemoveCustomerAttributeHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Service-Token" })
  xSdsServiceToken?: string;
}


export class RemoveCustomerAttributeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveCustomerAttributePathParams;

  @Metadata()
  headers: RemoveCustomerAttributeHeaders;
}


export class RemoveCustomerAttributeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
