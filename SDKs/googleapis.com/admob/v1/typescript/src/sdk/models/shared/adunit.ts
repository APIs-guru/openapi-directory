import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AdUnit
/** 
 * Describes an AdMob ad unit.
**/
export class AdUnit extends SpeakeasyBase {
  @Metadata({ data: "json, name=adFormat" })
  adFormat?: string;

  @Metadata({ data: "json, name=adTypes" })
  adTypes?: string[];

  @Metadata({ data: "json, name=adUnitId" })
  adUnitId?: string;

  @Metadata({ data: "json, name=appId" })
  appId?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
