import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CalendarResource
/** 
 * Public API: Resources.calendars
**/
export class CalendarResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=buildingId" })
  buildingId?: string;

  @Metadata({ data: "json, name=capacity" })
  capacity?: number;

  @Metadata({ data: "json, name=etags" })
  etags?: string;

  @Metadata({ data: "json, name=featureInstances" })
  featureInstances?: any;

  @Metadata({ data: "json, name=floorName" })
  floorName?: string;

  @Metadata({ data: "json, name=floorSection" })
  floorSection?: string;

  @Metadata({ data: "json, name=generatedResourceName" })
  generatedResourceName?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=resourceCategory" })
  resourceCategory?: string;

  @Metadata({ data: "json, name=resourceDescription" })
  resourceDescription?: string;

  @Metadata({ data: "json, name=resourceEmail" })
  resourceEmail?: string;

  @Metadata({ data: "json, name=resourceId" })
  resourceId?: string;

  @Metadata({ data: "json, name=resourceName" })
  resourceName?: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: string;

  @Metadata({ data: "json, name=userVisibleDescription" })
  userVisibleDescription?: string;
}
