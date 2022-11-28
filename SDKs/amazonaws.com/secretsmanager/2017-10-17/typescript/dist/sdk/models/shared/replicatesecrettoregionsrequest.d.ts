import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicaRegionType } from "./replicaregiontype";
export declare class ReplicateSecretToRegionsRequest extends SpeakeasyBase {
    addReplicaRegions: ReplicaRegionType[];
    forceOverwriteReplicaSecret?: boolean;
    secretId: string;
}
