import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ManagedConfigurationsSettings
/** 
 * A managed configurations settings resource contains the set of managed properties that have been configured for an Android app to be applied to a set of users. The app's developer would have defined configurable properties in the managed configurations schema.
**/
export class ManagedConfigurationsSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lastUpdatedTimestampMillis" })
  lastUpdatedTimestampMillis?: string;

  @SpeakeasyMetadata({ data: "json, name=mcmId" })
  mcmId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
