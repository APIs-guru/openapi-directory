import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartOnDemandReplicationRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=replicationRunId" })
  replicationRunId?: string;
}
