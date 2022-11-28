import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EeBtEligibility extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eligible" })
  eligible: boolean;

  @SpeakeasyMetadata({ data: "json, name=plan" })
  plan?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;
}
