import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartOnDemandAppReplicationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=appId" })
  appId: string;

  @Metadata({ data: "json, name=description" })
  description?: string;
}
