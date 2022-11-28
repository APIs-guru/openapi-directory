import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LocationEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=state_province" })
  stateProvince?: string;

  @SpeakeasyMetadata({ data: "json, name=venue" })
  venue?: string;
}
