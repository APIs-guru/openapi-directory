import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AdUnit
/** 
 * Describes an AdMob ad unit.
**/
export class AdUnit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adFormat" })
  adFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=adTypes" })
  adTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=adUnitId" })
  adUnitId?: string;

  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
