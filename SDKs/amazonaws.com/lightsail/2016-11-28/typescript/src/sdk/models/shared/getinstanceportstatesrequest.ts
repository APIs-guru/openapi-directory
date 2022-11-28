import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetInstancePortStatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceName" })
  instanceName: string;
}
