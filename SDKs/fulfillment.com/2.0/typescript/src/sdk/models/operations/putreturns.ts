import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutReturnsRmaRequestV2Items extends SpeakeasyBase {
  @Metadata({ data: "json, name=quantityExpected" })
  quantityExpected: number;

  @Metadata({ data: "json, name=sku" })
  sku: string;
}


export class PutReturnsRmaRequestV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: operations.PutReturnsRmaRequestV2Items })
  items: PutReturnsRmaRequestV2Items[];

  @Metadata({ data: "json, name=merchantOrderId" })
  merchantOrderId?: string;

  @Metadata({ data: "json, name=recipient" })
  recipient: shared.OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient;

  @Metadata({ data: "json, name=rmaNumber" })
  rmaNumber: string;
}


export class PutReturnsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  fdcAuth: shared.SchemeFdcAuth;
}


export class PutReturnsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PutReturnsRmaRequestV2;

  @Metadata()
  security: PutReturnsSecurity;
}


export class PutReturnsRmaResponseV2Items extends SpeakeasyBase {
  @Metadata({ data: "json, name=quantityExpected" })
  quantityExpected: number;

  @Metadata({ data: "json, name=sku" })
  sku: string;
}


export class PutReturnsRmaResponseV2ConsigneeV2IsoCountryV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=iso2" })
  iso2?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class PutReturnsRmaResponseV2ConsigneeV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=address1" })
  address1: string;

  @Metadata({ data: "json, name=address2" })
  address2?: string;

  @Metadata({ data: "json, name=addressLocality" })
  addressLocality: string;

  @Metadata({ data: "json, name=addressRegion" })
  addressRegion: string;

  @Metadata({ data: "json, name=companyName" })
  companyName?: string;

  @Metadata({ data: "json, name=country" })
  country: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=firstName" })
  firstName: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=iso" })
  iso?: PutReturnsRmaResponseV2ConsigneeV2IsoCountryV2;

  @Metadata({ data: "json, name=lastName" })
  lastName: string;

  @Metadata({ data: "json, name=phone" })
  phone?: string;

  @Metadata({ data: "json, name=postalCode" })
  postalCode: string;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=updatedBy" })
  updatedBy?: shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy;
}


export class PutReturnsRmaResponseV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: operations.PutReturnsRmaResponseV2Items })
  items: PutReturnsRmaResponseV2Items[];

  @Metadata({ data: "json, name=merchantOrderId" })
  merchantOrderId?: string;

  @Metadata({ data: "json, name=recipient" })
  recipient: PutReturnsRmaResponseV2ConsigneeV2;

  @Metadata({ data: "json, name=rmaNumber" })
  rmaNumber: string;
}


export class PutReturnsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  rmaResponseV2?: PutReturnsRmaResponseV2;

  @Metadata()
  statusCode: number;

  @Metadata()
  oneordersGetResponses404ContentApplication1jsonSchema?: shared.OneordersGetResponses404ContentApplication1jsonSchema;

  @Metadata()
  onereturnsPutResponses201ContentApplication1jsonSchema?: shared.OnereturnsPutResponses201ContentApplication1jsonSchema;
}
