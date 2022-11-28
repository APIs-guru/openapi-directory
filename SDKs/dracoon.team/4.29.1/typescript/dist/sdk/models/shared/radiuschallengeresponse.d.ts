import { SpeakeasyBase } from "../../../internal/utils";
/**
 * RADIUS challenge reply
**/
export declare class RadiusChallengeResponse extends SpeakeasyBase {
    code: number;
    debugInfo?: string;
    errorCode?: number;
    message: string;
    replyMessage: string;
    replyState: string;
}
