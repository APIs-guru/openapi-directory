import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ItvUpdateIntentStrongResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientSecret" })
  clientSecret?: string;

  @SpeakeasyMetadata({ data: "json, name=intentId" })
  intentId?: string;

  @SpeakeasyMetadata({ data: "json, name=intentType" })
  intentType?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
