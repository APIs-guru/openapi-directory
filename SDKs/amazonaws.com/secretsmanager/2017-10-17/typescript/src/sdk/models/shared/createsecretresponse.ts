import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReplicationStatusType } from "./replicationstatustype";


export class CreateSecretResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ARN" })
  arn?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=ReplicationStatus", elemType: shared.ReplicationStatusType })
  replicationStatus?: ReplicationStatusType[];

  @Metadata({ data: "json, name=VersionId" })
  versionId?: string;
}
