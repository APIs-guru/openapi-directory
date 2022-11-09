import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Outpost
/** 
 * Information about an Outpost.
**/
export class Outpost extends SpeakeasyBase {
  @Metadata({ data: "json, name=AvailabilityZone" })
  availabilityZone?: string;

  @Metadata({ data: "json, name=AvailabilityZoneId" })
  availabilityZoneId?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=LifeCycleStatus" })
  lifeCycleStatus?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=OutpostArn" })
  outpostArn?: string;

  @Metadata({ data: "json, name=OutpostId" })
  outpostId?: string;

  @Metadata({ data: "json, name=OwnerId" })
  ownerId?: string;

  @Metadata({ data: "json, name=SiteArn" })
  siteArn?: string;

  @Metadata({ data: "json, name=SiteId" })
  siteId?: string;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
