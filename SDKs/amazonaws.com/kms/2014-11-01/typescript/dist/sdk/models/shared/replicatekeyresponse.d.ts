import { SpeakeasyBase } from "../../../internal/utils";
import { KeyMetadata } from "./keymetadata";
import { Tag } from "./tag";
export declare class ReplicateKeyResponse extends SpeakeasyBase {
    replicaKeyMetadata?: KeyMetadata;
    replicaPolicy?: string;
    replicaTags?: Tag[];
}
