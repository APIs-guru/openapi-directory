import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicaRegionType } from "./replicaregiontype";
import { Tag } from "./tag";
export declare class CreateSecretRequest extends SpeakeasyBase {
    addReplicaRegions?: ReplicaRegionType[];
    clientRequestToken?: string;
    description?: string;
    forceOverwriteReplicaSecret?: boolean;
    kmsKeyId?: string;
    name: string;
    secretBinary?: string;
    secretString?: string;
    tags?: Tag[];
}
