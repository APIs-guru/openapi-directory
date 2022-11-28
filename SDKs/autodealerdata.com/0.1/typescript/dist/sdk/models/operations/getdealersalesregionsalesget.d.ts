import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDealerSalesRegionSalesGetQueryParams extends SpeakeasyBase {
    brandName: string;
    jwt: string;
    month: Date;
    regionName: string;
}
export declare class GetDealerSalesRegionSalesGetRequest extends SpeakeasyBase {
    queryParams: GetDealerSalesRegionSalesGetQueryParams;
}
export declare class GetDealerSalesRegionSalesGetResponse extends SpeakeasyBase {
    contentType: string;
    genericResponse?: shared.GenericResponse;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
}
