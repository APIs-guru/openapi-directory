import { SpeakeasyBase } from "../../../internal/utils";
export declare class QuittungTseDataQueryParams extends SpeakeasyBase {
    account?: string;
}
export declare class QuittungTseDataRequest extends SpeakeasyBase {
    queryParams: QuittungTseDataQueryParams;
}
export declare class QuittungTseDataResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
