import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AddOn
/** 
 * Describes an add-on that is enabled for an Amazon Lightsail resource.
**/
export class AddOn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nextSnapshotTimeOfDay" })
  nextSnapshotTimeOfDay?: string;

  @SpeakeasyMetadata({ data: "json, name=snapshotTimeOfDay" })
  snapshotTimeOfDay?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
