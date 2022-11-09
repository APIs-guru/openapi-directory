import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudApigeeV1SecurityProfileScoringConfig
/** 
 * Security configurations to manage scoring.
**/
export class GoogleCloudApigeeV1SecurityProfileScoringConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=scorePath" })
  scorePath?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
