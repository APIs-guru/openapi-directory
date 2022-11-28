import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationStatusType } from "./replicationstatustype";



export class CreateSecretResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ARN" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationStatus", elemType: ReplicationStatusType })
  replicationStatus?: ReplicationStatusType[];

  @SpeakeasyMetadata({ data: "json, name=VersionId" })
  versionId?: string;
}
