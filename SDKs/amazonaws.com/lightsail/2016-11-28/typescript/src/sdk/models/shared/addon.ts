import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AddOn
/** 
 * Describes an add-on that is enabled for an Amazon Lightsail resource.
**/
export class AddOn extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nextSnapshotTimeOfDay" })
  nextSnapshotTimeOfDay?: string;

  @Metadata({ data: "json, name=snapshotTimeOfDay" })
  snapshotTimeOfDay?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
