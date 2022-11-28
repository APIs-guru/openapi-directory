import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerMasterKeySpecEnum } from "./customermasterkeyspecenum";
import { KeySpecEnum } from "./keyspecenum";
import { KeyUsageTypeEnum } from "./keyusagetypeenum";
import { OriginTypeEnum } from "./origintypeenum";
import { Tag } from "./tag";
export declare class CreateKeyRequest extends SpeakeasyBase {
    bypassPolicyLockoutSafetyCheck?: boolean;
    customKeyStoreId?: string;
    customerMasterKeySpec?: CustomerMasterKeySpecEnum;
    description?: string;
    keySpec?: KeySpecEnum;
    keyUsage?: KeyUsageTypeEnum;
    multiRegion?: boolean;
    origin?: OriginTypeEnum;
    policy?: string;
    tags?: Tag[];
}
