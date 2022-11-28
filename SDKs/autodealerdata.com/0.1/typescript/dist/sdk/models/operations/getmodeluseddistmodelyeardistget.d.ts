import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetModelUsedDistModelYearDistGetQueryParams extends SpeakeasyBase {
    brandName: string;
    jwt: string;
    modelName: string;
    regionName?: string;
}
export declare class GetModelUsedDistModelYearDistGetRequest extends SpeakeasyBase {
    queryParams: GetModelUsedDistModelYearDistGetQueryParams;
}
export declare class GetModelUsedDistModelYearDistGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    modelYearDistResp?: shared.ModelYearDistResp;
    statusCode: number;
}
