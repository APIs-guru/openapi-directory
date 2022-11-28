import { SpeakeasyBase } from "../../../internal/utils";
import { MessageTypeEnum } from "./messagetypeenum";
import { SigningAlgorithmSpecEnum } from "./signingalgorithmspecenum";
export declare class SignRequest extends SpeakeasyBase {
    grantTokens?: string[];
    keyId: string;
    message: string;
    messageType?: MessageTypeEnum;
    signingAlgorithm: SigningAlgorithmSpecEnum;
}
