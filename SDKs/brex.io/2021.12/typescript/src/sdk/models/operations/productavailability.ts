import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProductAvailabilityPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sku" })
  sku: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subjectId" })
  subjectId: string;
}


export class ProductAvailabilitySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class ProductAvailabilityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProductAvailabilityPathParams;

  @SpeakeasyMetadata()
  security: ProductAvailabilitySecurity;
}


export class ProductAvailabilityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  productAvailability200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  productAvailabilityDefaultApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
