import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class ReplicateKeyRequest extends SpeakeasyBase {
    bypassPolicyLockoutSafetyCheck?: boolean;
    description?: string;
    keyId: string;
    policy?: string;
    replicaRegion: string;
    tags?: Tag[];
}
