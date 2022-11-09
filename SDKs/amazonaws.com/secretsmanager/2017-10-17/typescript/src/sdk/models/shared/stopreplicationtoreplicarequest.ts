import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopReplicationToReplicaRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=SecretId" })
  secretId: string;
}
