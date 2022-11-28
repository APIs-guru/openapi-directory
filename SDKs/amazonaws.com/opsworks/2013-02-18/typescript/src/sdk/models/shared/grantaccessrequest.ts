import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GrantAccessRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId: string;

  @SpeakeasyMetadata({ data: "json, name=ValidForInMinutes" })
  validForInMinutes?: number;
}
