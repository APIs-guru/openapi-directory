import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Verification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason: string;

  @SpeakeasyMetadata({ data: "json, name=signature" })
  signature: string;

  @SpeakeasyMetadata({ data: "json, name=verified" })
  verified: boolean;
}
