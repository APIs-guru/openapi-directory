import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProductAvailabilityPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=sku" })
  sku: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=subjectId" })
  subjectId: string;
}


export class ProductAvailabilitySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class ProductAvailabilityRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProductAvailabilityPathParams;

  @Metadata()
  security: ProductAvailabilitySecurity;
}


export class ProductAvailabilityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  productAvailability200ApplicationJsonAny?: any;

  @Metadata()
  productAvailabilityDefaultApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
