import { SpeakeasyBase } from "../../../internal/utils";
import { OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy } from "./onereturnsgetresponses200contentapplication1jsonschemapropertiesdataitemspropertiesupdatedby";
export declare class OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsigneeIsoCountryV2 extends SpeakeasyBase {
    id?: number;
    iso2?: string;
    name?: string;
}
export declare class OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee extends SpeakeasyBase {
    address1: string;
    address2?: string;
    addressLocality: string;
    addressRegion: string;
    companyName?: string;
    country: string;
    email?: string;
    firstName: string;
    id: number;
    iso?: OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsigneeIsoCountryV2;
    lastName: string;
    phone?: string;
    postalCode: string;
    updatedAt?: Date;
    updatedBy?: OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy;
}
