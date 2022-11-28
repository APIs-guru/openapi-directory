import { SpeakeasyBase } from "../../../internal/utils";
import { SigningAlgorithmSpecEnum } from "./signingalgorithmspecenum";
export declare class VerifyResponse extends SpeakeasyBase {
    keyId?: string;
    signatureValid?: boolean;
    signingAlgorithm?: SigningAlgorithmSpecEnum;
}
