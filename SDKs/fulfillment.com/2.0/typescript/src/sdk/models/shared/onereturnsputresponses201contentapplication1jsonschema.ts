import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy } from "./onereturnsgetresponses200contentapplication1jsonschemapropertiesdataitemspropertiesupdatedby";



export class OnereturnsPutResponses201ContentApplication1jsonSchemaItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=quantityExpected" })
  quantityExpected: number;

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku: string;
}


export class OnereturnsPutResponses201ContentApplication1jsonSchemaConsigneeV2IsoCountryV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=iso2" })
  iso2?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class OnereturnsPutResponses201ContentApplication1jsonSchemaConsigneeV2 extends SpeakeasyBase {
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
  iso?: OnereturnsPutResponses201ContentApplication1jsonSchemaConsigneeV2IsoCountryV2;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=postalCode" })
  postalCode: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updatedBy" })
  updatedBy?: OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy;
}


export class OnereturnsPutResponses201ContentApplication1jsonSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: OnereturnsPutResponses201ContentApplication1jsonSchemaItems })
  items: OnereturnsPutResponses201ContentApplication1jsonSchemaItems[];

  @SpeakeasyMetadata({ data: "json, name=merchantOrderId" })
  merchantOrderId?: string;

  @SpeakeasyMetadata({ data: "json, name=recipient" })
  recipient: OnereturnsPutResponses201ContentApplication1jsonSchemaConsigneeV2;

  @SpeakeasyMetadata({ data: "json, name=rmaNumber" })
  rmaNumber: string;
}
