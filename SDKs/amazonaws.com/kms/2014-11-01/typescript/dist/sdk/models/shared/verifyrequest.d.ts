import { SpeakeasyBase } from "../../../internal/utils";
import { MessageTypeEnum } from "./messagetypeenum";
import { SigningAlgorithmSpecEnum } from "./signingalgorithmspecenum";
export declare class VerifyRequest extends SpeakeasyBase {
    grantTokens?: string[];
    keyId: string;
    message: string;
    messageType?: MessageTypeEnum;
    signature: string;
    signingAlgorithm: SigningAlgorithmSpecEnum;
}
