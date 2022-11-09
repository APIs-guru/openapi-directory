import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReplicaRegionType } from "./replicaregiontype";


export class ReplicateSecretToRegionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AddReplicaRegions", elemType: shared.ReplicaRegionType })
  addReplicaRegions: ReplicaRegionType[];

  @Metadata({ data: "json, name=ForceOverwriteReplicaSecret" })
  forceOverwriteReplicaSecret?: boolean;

  @Metadata({ data: "json, name=SecretId" })
  secretId: string;
}
