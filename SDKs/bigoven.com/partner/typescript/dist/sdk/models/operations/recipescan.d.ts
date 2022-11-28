import { SpeakeasyBase } from "../../../internal/utils";
export declare class RecipeScanQueryParams extends SpeakeasyBase {
    devicetype?: string;
    lat?: number;
    lng?: number;
    test?: boolean;
}
export declare class RecipeScanRequest extends SpeakeasyBase {
    queryParams: RecipeScanQueryParams;
}
export declare class RecipeScanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
