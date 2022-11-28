import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTaxonomyTermsQueryParams extends SpeakeasyBase {
    apiKey?: string;
    bodySubtype?: string;
    bodyType?: string;
    drivetrain?: string;
    engine?: string;
    engineBlock?: string;
    engineSize?: string;
    field: string;
    fuelType?: string;
    make?: string;
    model?: string;
    transmission?: string;
    trim?: string;
    vehicleType?: string;
    year?: string;
}
export declare class GetTaxonomyTermsRequest extends SpeakeasyBase {
    queryParams: GetTaxonomyTermsQueryParams;
}
export declare class GetTaxonomyTermsResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    specsAutoCompleteResponse?: shared.SpecsAutoCompleteResponse;
    statusCode: number;
}
