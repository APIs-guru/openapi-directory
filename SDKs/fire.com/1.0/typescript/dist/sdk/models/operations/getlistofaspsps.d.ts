import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetListOfAspspsQueryParams extends SpeakeasyBase {
    currency?: string;
}
export declare class GetListOfAspspsAspspsAspspCountry extends SpeakeasyBase {
    code?: string;
    description?: string;
}
export declare class GetListOfAspspsAspspsAspsp extends SpeakeasyBase {
    alias?: string;
    aspspUuid?: string;
    country?: GetListOfAspspsAspspsAspspCountry;
    currency?: shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency;
    dateCreated?: Date;
    lastUpdated?: Date;
    logoUrl?: string;
}
export declare class GetListOfAspspsAspsps extends SpeakeasyBase {
    aspsps?: GetListOfAspspsAspspsAspsp[];
    total?: number;
}
export declare class GetListOfAspspsRequest extends SpeakeasyBase {
    queryParams: GetListOfAspspsQueryParams;
}
export declare class GetListOfAspspsResponse extends SpeakeasyBase {
    aspsps?: GetListOfAspspsAspsps;
    contentType: string;
    statusCode: number;
}
