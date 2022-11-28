import { SpeakeasyBase } from "../../../internal/utils";
import { DataKeySpecEnum } from "./datakeyspecenum";
export declare class GenerateDataKeyRequest extends SpeakeasyBase {
    encryptionContext?: Map<string, string>;
    grantTokens?: string[];
    keyId: string;
    keySpec?: DataKeySpecEnum;
    numberOfBytes?: number;
}
