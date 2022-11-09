import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GrantAccessRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstanceId" })
  instanceId: string;

  @Metadata({ data: "json, name=ValidForInMinutes" })
  validForInMinutes?: number;
}
