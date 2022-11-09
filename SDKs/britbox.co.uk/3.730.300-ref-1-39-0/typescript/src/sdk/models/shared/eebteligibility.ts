import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EeBtEligibility extends SpeakeasyBase {
  @Metadata({ data: "json, name=eligible" })
  eligible: boolean;

  @Metadata({ data: "json, name=plan" })
  plan?: string;

  @Metadata({ data: "json, name=source" })
  source?: string;
}
