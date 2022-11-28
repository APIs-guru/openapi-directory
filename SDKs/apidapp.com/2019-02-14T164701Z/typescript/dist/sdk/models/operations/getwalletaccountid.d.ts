import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetWalletAccountIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetWalletAccountIdRequest extends SpeakeasyBase {
    pathParams: GetWalletAccountIdPathParams;
}
export declare class GetWalletAccountIdResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
