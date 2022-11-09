import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartOnDemandReplicationRunRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=replicationJobId" })
  replicationJobId: string;
}
