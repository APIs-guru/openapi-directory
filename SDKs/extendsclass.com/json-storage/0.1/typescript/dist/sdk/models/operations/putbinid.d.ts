import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutBinIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutBinIdRequest extends SpeakeasyBase {
    pathParams: PutBinIdPathParams;
}
export declare class PutBinIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: any;
    statusCode: number;
    updateStatus?: any;
}
