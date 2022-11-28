import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutReturnsRmaRequestV2Items extends SpeakeasyBase {
    quantityExpected: number;
    sku: string;
}
export declare class PutReturnsRmaRequestV2 extends SpeakeasyBase {
    items: PutReturnsRmaRequestV2Items[];
    merchantOrderId?: string;
    recipient: shared.OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient;
    rmaNumber: string;
}
export declare class PutReturnsSecurity extends SpeakeasyBase {
    fdcAuth: shared.SchemeFdcAuth;
}
export declare class PutReturnsRmaResponseV2Items extends SpeakeasyBase {
    quantityExpected: number;
    sku: string;
}
export declare class PutReturnsRmaResponseV2ConsigneeV2IsoCountryV2 extends SpeakeasyBase {
    id?: number;
    iso2?: string;
    name?: string;
}
export declare class PutReturnsRmaResponseV2ConsigneeV2 extends SpeakeasyBase {
    address1: string;
    address2?: string;
    addressLocality: string;
    addressRegion: string;
    companyName?: string;
    country: string;
    email?: string;
    firstName: string;
    id: number;
    iso?: PutReturnsRmaResponseV2ConsigneeV2IsoCountryV2;
    lastName: string;
    phone?: string;
    postalCode: string;
    updatedAt?: Date;
    updatedBy?: shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy;
}
export declare class PutReturnsRmaResponseV2 extends SpeakeasyBase {
    items: PutReturnsRmaResponseV2Items[];
    merchantOrderId?: string;
    recipient: PutReturnsRmaResponseV2ConsigneeV2;
    rmaNumber: string;
}
export declare class PutReturnsRequest extends SpeakeasyBase {
    request: PutReturnsRmaRequestV2;
    security: PutReturnsSecurity;
}
export declare class PutReturnsResponse extends SpeakeasyBase {
    contentType: string;
    rmaResponseV2?: PutReturnsRmaResponseV2;
    statusCode: number;
    oneordersGetResponses404ContentApplication1jsonSchema?: shared.OneordersGetResponses404ContentApplication1jsonSchema;
    onereturnsPutResponses201ContentApplication1jsonSchema?: shared.OnereturnsPutResponses201ContentApplication1jsonSchema;
}
