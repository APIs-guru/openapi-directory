import { SpeakeasyBase } from "../../../internal/utils";
import { ExpirationModelTypeEnum } from "./expirationmodeltypeenum";
export declare class ImportKeyMaterialRequest extends SpeakeasyBase {
    encryptedKeyMaterial: string;
    expirationModel?: ExpirationModelTypeEnum;
    importToken: string;
    keyId: string;
    validTo?: Date;
}
