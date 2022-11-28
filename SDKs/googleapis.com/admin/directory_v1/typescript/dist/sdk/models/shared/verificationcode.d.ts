import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Directory API allows you to view, generate, and invalidate backup verification codes for a user.
**/
export declare class VerificationCode extends SpeakeasyBase {
    etag?: string;
    kind?: string;
    userId?: string;
    verificationCode?: string;
}
