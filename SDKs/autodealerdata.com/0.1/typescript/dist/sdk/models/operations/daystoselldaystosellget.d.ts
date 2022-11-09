import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DaysToSellDaysToSellGetQueryParams extends SpeakeasyBase {
    brandName: string;
    jwt: string;
    regionName?: string;
}
export declare class DaysToSellDaysToSellGetRequest extends SpeakeasyBase {
    queryParams: DaysToSellDaysToSellGetQueryParams;
}
export declare class DaysToSellDaysToSellGetResponse extends SpeakeasyBase {
    contentType: string;
    genericResponse?: shared.GenericResponse;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
}
