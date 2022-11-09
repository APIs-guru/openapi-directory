import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInstancePortStatesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceName" })
  instanceName: string;
}
