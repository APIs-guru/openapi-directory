import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicaRegionType } from "./replicaregiontype";



export class ReplicateSecretToRegionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AddReplicaRegions", elemType: ReplicaRegionType })
  addReplicaRegions: ReplicaRegionType[];

  @SpeakeasyMetadata({ data: "json, name=ForceOverwriteReplicaSecret" })
  forceOverwriteReplicaSecret?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SecretId" })
  secretId: string;
}
