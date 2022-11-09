import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteReplicationJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=replicationJobId" })
  replicationJobId: string;
}
