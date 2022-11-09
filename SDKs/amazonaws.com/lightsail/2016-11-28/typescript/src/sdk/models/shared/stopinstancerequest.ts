import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopInstanceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=force" })
  force?: boolean;

  @Metadata({ data: "json, name=instanceName" })
  instanceName: string;
}
