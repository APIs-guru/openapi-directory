import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DaysSupplyDaysSupplyGetQueryParams extends SpeakeasyBase {
    brandName: string;
    jwt: string;
    regionName?: string;
}
export declare class DaysSupplyDaysSupplyGetRequest extends SpeakeasyBase {
    queryParams: DaysSupplyDaysSupplyGetQueryParams;
}
export declare class DaysSupplyDaysSupplyGetResponse extends SpeakeasyBase {
    contentType: string;
    genericResponse?: shared.GenericResponse;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
}
