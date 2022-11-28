import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1ScoreComponent } from "./googlecloudapigeev1scorecomponent";
import { GoogleTypeInterval } from "./googletypeinterval";



// GoogleCloudApigeeV1Score
/** 
 * Represents Security Score.
**/
export class GoogleCloudApigeeV1Score extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=component" })
  component?: GoogleCloudApigeeV1ScoreComponent;

  @SpeakeasyMetadata({ data: "json, name=subcomponents", elemType: GoogleCloudApigeeV1ScoreComponent })
  subcomponents?: GoogleCloudApigeeV1ScoreComponent[];

  @SpeakeasyMetadata({ data: "json, name=timeRange" })
  timeRange?: GoogleTypeInterval;
}
