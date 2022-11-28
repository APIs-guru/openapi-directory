import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutReturnsRmaRequestV2Items extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=quantityExpected" })
  quantityExpected: number;

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku: string;
}


export class PutReturnsRmaRequestV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: PutReturnsRmaRequestV2Items })
  items: PutReturnsRmaRequestV2Items[];

  @SpeakeasyMetadata({ data: "json, name=merchantOrderId" })
  merchantOrderId?: string;

  @SpeakeasyMetadata({ data: "json, name=recipient" })
  recipient: shared.OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient;

  @SpeakeasyMetadata({ data: "json, name=rmaNumber" })
  rmaNumber: string;
}


export class PutReturnsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  fdcAuth: shared.SchemeFdcAuth;
}


export class PutReturnsRmaResponseV2Items extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=quantityExpected" })
  quantityExpected: number;

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku: string;
}


export class PutReturnsRmaResponseV2ConsigneeV2IsoCountryV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=iso2" })
  iso2?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class PutReturnsRmaResponseV2ConsigneeV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address1" })
  address1: string;

  @SpeakeasyMetadata({ data: "json, name=address2" })
  address2?: string;

  @SpeakeasyMetadata({ data: "json, name=addressLocality" })
  addressLocality: string;

  @SpeakeasyMetadata({ data: "json, name=addressRegion" })
  addressRegion: string;

  @SpeakeasyMetadata({ data: "json, name=companyName" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=iso" })
  iso?: PutReturnsRmaResponseV2ConsigneeV2IsoCountryV2;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=postalCode" })
  postalCode: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updatedBy" })
  updatedBy?: shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy;
}


export class PutReturnsRmaResponseV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: PutReturnsRmaResponseV2Items })
  items: PutReturnsRmaResponseV2Items[];

  @SpeakeasyMetadata({ data: "json, name=merchantOrderId" })
  merchantOrderId?: string;

  @SpeakeasyMetadata({ data: "json, name=recipient" })
  recipient: PutReturnsRmaResponseV2ConsigneeV2;

  @SpeakeasyMetadata({ data: "json, name=rmaNumber" })
  rmaNumber: string;
}


export class PutReturnsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutReturnsRmaRequestV2;

  @SpeakeasyMetadata()
  security: PutReturnsSecurity;
}


export class PutReturnsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  rmaResponseV2?: PutReturnsRmaResponseV2;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  oneordersGetResponses404ContentApplication1jsonSchema?: shared.OneordersGetResponses404ContentApplication1jsonSchema;

  @SpeakeasyMetadata()
  onereturnsPutResponses201ContentApplication1jsonSchema?: shared.OnereturnsPutResponses201ContentApplication1jsonSchema;
}
