import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OverageDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=overages_reached" })
  overagesReached?: boolean;

  @SpeakeasyMetadata({ data: "json, name=remaining" })
  remaining?: number;
}
