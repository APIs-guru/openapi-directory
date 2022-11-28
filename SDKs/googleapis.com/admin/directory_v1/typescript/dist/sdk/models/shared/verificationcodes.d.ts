import { SpeakeasyBase } from "../../../internal/utils";
import { VerificationCode } from "./verificationcode";
/**
 * JSON response template for list verification codes operation in Directory API.
**/
export declare class VerificationCodes extends SpeakeasyBase {
    etag?: string;
    items?: VerificationCode[];
    kind?: string;
}
