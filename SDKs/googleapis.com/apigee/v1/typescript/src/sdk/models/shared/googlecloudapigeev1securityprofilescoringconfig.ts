import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudApigeeV1SecurityProfileScoringConfig
/** 
 * Security configurations to manage scoring.
**/
export class GoogleCloudApigeeV1SecurityProfileScoringConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=scorePath" })
  scorePath?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
