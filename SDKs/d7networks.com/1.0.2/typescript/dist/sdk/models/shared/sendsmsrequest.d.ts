import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Send SMS Request
**/
export declare class SendSmsRequest extends SpeakeasyBase {
    content: string;
    from: string;
    to: number;
}
