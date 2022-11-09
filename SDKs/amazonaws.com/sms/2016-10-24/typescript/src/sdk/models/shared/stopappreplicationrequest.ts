import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopAppReplicationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=appId" })
  appId?: string;
}
