import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationStatusType } from "./replicationstatustype";



export class ReplicateSecretToRegionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ARN" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationStatus", elemType: ReplicationStatusType })
  replicationStatus?: ReplicationStatusType[];
}
