import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RemoveRegionsFromReplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RemoveReplicaRegions" })
  removeReplicaRegions: string[];

  @SpeakeasyMetadata({ data: "json, name=SecretId" })
  secretId: string;
}
