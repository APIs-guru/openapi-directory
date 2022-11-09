import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetDealerSalesRegionDailySalesGetQueryParams extends SpeakeasyBase {
    brandName: string;
    day: Date;
    jwt: string;
    regionName: string;
}
export declare class GetDealerSalesRegionDailySalesGetRequest extends SpeakeasyBase {
    queryParams: GetDealerSalesRegionDailySalesGetQueryParams;
}
export declare class GetDealerSalesRegionDailySalesGetResponse extends SpeakeasyBase {
    contentType: string;
    genericResponse?: shared.GenericResponse;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
}
