import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReplicationStatusType } from "./replicationstatustype";


export class RemoveRegionsFromReplicationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ARN" })
  arn?: string;

  @Metadata({ data: "json, name=ReplicationStatus", elemType: shared.ReplicationStatusType })
  replicationStatus?: ReplicationStatusType[];
}
