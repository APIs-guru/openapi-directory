import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VinDecodeVinDecodeGetQueryParams extends SpeakeasyBase {
    includeRecall?: boolean;
    jwt: string;
    passEmpty?: boolean;
    vin: string;
}
export declare class VinDecodeVinDecodeGetRequest extends SpeakeasyBase {
    queryParams: VinDecodeVinDecodeGetQueryParams;
}
export declare class VinDecodeVinDecodeGetResponse extends SpeakeasyBase {
    contentType: string;
    genericResponse?: shared.GenericResponse;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
}
