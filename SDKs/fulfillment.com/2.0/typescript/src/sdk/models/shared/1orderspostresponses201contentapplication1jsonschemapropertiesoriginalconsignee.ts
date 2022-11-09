import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy } from "./1returnsgetresponses200contentapplication1jsonschemapropertiesdataitemspropertiesupdatedby";


export class OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsigneeIsoCountryV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=iso2" })
  iso2?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee extends SpeakeasyBase {
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
  iso?: OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsigneeIsoCountryV2;

  @Metadata({ data: "json, name=lastName" })
  lastName: string;

  @Metadata({ data: "json, name=phone" })
  phone?: string;

  @Metadata({ data: "json, name=postalCode" })
  postalCode: string;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=updatedBy" })
  updatedBy?: OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy;
}
