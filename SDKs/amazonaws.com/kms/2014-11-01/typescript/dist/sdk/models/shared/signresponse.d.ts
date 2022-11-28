import { SpeakeasyBase } from "../../../internal/utils";
import { SigningAlgorithmSpecEnum } from "./signingalgorithmspecenum";
export declare class SignResponse extends SpeakeasyBase {
    keyId?: string;
    signature?: string;
    signingAlgorithm?: SigningAlgorithmSpecEnum;
}
