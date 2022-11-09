import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1ScoreComponent } from "./googlecloudapigeev1scorecomponent";
import { GoogleCloudApigeeV1ScoreComponent } from "./googlecloudapigeev1scorecomponent";
import { GoogleTypeInterval } from "./googletypeinterval";


// GoogleCloudApigeeV1Score
/** 
 * Represents Security Score.
**/
export class GoogleCloudApigeeV1Score extends SpeakeasyBase {
  @Metadata({ data: "json, name=component" })
  component?: GoogleCloudApigeeV1ScoreComponent;

  @Metadata({ data: "json, name=subcomponents", elemType: shared.GoogleCloudApigeeV1ScoreComponent })
  subcomponents?: GoogleCloudApigeeV1ScoreComponent[];

  @Metadata({ data: "json, name=timeRange" })
  timeRange?: GoogleTypeInterval;
}
