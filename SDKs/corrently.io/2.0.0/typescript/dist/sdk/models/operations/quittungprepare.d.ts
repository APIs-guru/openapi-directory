import { SpeakeasyBase } from "../../../internal/utils";
export declare class QuittungPrepareRequestBody extends SpeakeasyBase {
    account?: string;
}
export declare class QuittungPrepareRequest extends SpeakeasyBase {
    request?: QuittungPrepareRequestBody;
}
export declare class QuittungPrepareResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    quittungPrepare200ApplicationJsonString?: string;
}
