import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Location extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=lat" })
  lat?: string;

  @SpeakeasyMetadata({ data: "json, name=lon" })
  lon?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=zip" })
  zip?: string;
}
