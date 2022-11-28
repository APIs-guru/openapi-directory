import { SpeakeasyBase } from "../../../internal/utils";
export declare class QuittungComitRequestBody extends SpeakeasyBase {
    account?: string;
}
export declare class QuittungComitRequest extends SpeakeasyBase {
    request?: QuittungComitRequestBody;
}
export declare class QuittungComitResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    quittungComit200ApplicationJsonString?: string;
}
