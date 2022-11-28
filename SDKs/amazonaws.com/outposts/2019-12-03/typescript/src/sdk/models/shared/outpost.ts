import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Outpost
/** 
 * Information about an Outpost.
**/
export class Outpost extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AvailabilityZone" })
  availabilityZone?: string;

  @SpeakeasyMetadata({ data: "json, name=AvailabilityZoneId" })
  availabilityZoneId?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=LifeCycleStatus" })
  lifeCycleStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=OutpostArn" })
  outpostArn?: string;

  @SpeakeasyMetadata({ data: "json, name=OutpostId" })
  outpostId?: string;

  @SpeakeasyMetadata({ data: "json, name=OwnerId" })
  ownerId?: string;

  @SpeakeasyMetadata({ data: "json, name=SiteArn" })
  siteArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SiteId" })
  siteId?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
