import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopReplicationToReplicaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SecretId" })
  secretId: string;
}
