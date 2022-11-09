import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RemoveRegionsFromReplicationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=RemoveReplicaRegions" })
  removeReplicaRegions: string[];

  @Metadata({ data: "json, name=SecretId" })
  secretId: string;
}
