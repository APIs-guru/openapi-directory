import { SpeakeasyBase } from "../../../internal/utils";
import { Merchant } from "./merchant";
export declare class GetMerchantResponse extends SpeakeasyBase {
    data: Merchant;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
