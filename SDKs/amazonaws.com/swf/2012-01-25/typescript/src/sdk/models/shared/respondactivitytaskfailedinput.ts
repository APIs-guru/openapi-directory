import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RespondActivityTaskFailedInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=details" })
  details?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=taskToken" })
  taskToken: string;
}
