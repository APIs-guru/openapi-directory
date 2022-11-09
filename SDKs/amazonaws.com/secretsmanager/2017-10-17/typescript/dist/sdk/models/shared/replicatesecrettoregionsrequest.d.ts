import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ReplicaRegionType } from "./replicaregiontype";
export declare class ReplicateSecretToRegionsRequest extends SpeakeasyBase {
    addReplicaRegions: ReplicaRegionType[];
    forceOverwriteReplicaSecret?: boolean;
    secretId: string;
}
