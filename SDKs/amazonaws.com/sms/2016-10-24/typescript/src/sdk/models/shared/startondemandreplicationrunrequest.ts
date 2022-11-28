import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartOnDemandReplicationRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=replicationJobId" })
  replicationJobId: string;
}
