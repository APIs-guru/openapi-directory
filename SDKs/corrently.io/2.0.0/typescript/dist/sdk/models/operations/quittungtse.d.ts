import { SpeakeasyBase } from "../../../internal/utils";
export declare class QuittungTseQueryParams extends SpeakeasyBase {
    account?: string;
}
export declare class QuittungTse200ApplicationJson extends SpeakeasyBase {
    data?: any;
    publickey?: string;
    raw?: string;
    signature?: string;
}
export declare class QuittungTseRequest extends SpeakeasyBase {
    queryParams: QuittungTseQueryParams;
}
export declare class QuittungTseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    quittungTse200ApplicationJsonObject?: QuittungTse200ApplicationJson;
}
