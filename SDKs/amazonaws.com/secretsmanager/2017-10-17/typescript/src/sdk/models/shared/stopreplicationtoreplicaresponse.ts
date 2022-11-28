import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopReplicationToReplicaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ARN" })
  arn?: string;
}
