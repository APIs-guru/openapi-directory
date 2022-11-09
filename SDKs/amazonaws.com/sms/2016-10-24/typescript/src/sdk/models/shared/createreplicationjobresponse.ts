import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateReplicationJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=replicationJobId" })
  replicationJobId?: string;
}
