import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LocationPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedLocations" })
  allowedLocations?: string[];
}
