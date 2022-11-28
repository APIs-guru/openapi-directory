import { SpeakeasyBase } from "../../../internal/utils";
import { OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy } from "./onereturnsgetresponses200contentapplication1jsonschemapropertiesdataitemspropertiesupdatedby";
export declare class OnereturnsPutResponses201ContentApplication1jsonSchemaItems extends SpeakeasyBase {
    quantityExpected: number;
    sku: string;
}
export declare class OnereturnsPutResponses201ContentApplication1jsonSchemaConsigneeV2IsoCountryV2 extends SpeakeasyBase {
    id?: number;
    iso2?: string;
    name?: string;
}
export declare class OnereturnsPutResponses201ContentApplication1jsonSchemaConsigneeV2 extends SpeakeasyBase {
    address1: string;
    address2?: string;
    addressLocality: string;
    addressRegion: string;
    companyName?: string;
    country: string;
    email?: string;
    firstName: string;
    id: number;
    iso?: OnereturnsPutResponses201ContentApplication1jsonSchemaConsigneeV2IsoCountryV2;
    lastName: string;
    phone?: string;
    postalCode: string;
    updatedAt?: Date;
    updatedBy?: OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy;
}
export declare class OnereturnsPutResponses201ContentApplication1jsonSchema extends SpeakeasyBase {
    items: OnereturnsPutResponses201ContentApplication1jsonSchemaItems[];
    merchantOrderId?: string;
    recipient: OnereturnsPutResponses201ContentApplication1jsonSchemaConsigneeV2;
    rmaNumber: string;
}
