import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CalendarResource
/** 
 * Public API: Resources.calendars
**/
export class CalendarResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buildingId" })
  buildingId?: string;

  @SpeakeasyMetadata({ data: "json, name=capacity" })
  capacity?: number;

  @SpeakeasyMetadata({ data: "json, name=etags" })
  etags?: string;

  @SpeakeasyMetadata({ data: "json, name=featureInstances" })
  featureInstances?: any;

  @SpeakeasyMetadata({ data: "json, name=floorName" })
  floorName?: string;

  @SpeakeasyMetadata({ data: "json, name=floorSection" })
  floorSection?: string;

  @SpeakeasyMetadata({ data: "json, name=generatedResourceName" })
  generatedResourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceCategory" })
  resourceCategory?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceDescription" })
  resourceDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceEmail" })
  resourceEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceId" })
  resourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=userVisibleDescription" })
  userVisibleDescription?: string;
}
