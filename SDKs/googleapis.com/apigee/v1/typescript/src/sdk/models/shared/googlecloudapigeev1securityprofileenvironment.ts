import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudApigeeV1SecurityProfileEnvironment
/** 
 * Environment information of attached environments. Scoring an environment is enabled only if it is attached to a security profile.
**/
export class GoogleCloudApigeeV1SecurityProfileEnvironment extends SpeakeasyBase {
  @Metadata({ data: "json, name=attachTime" })
  attachTime?: string;

  @Metadata({ data: "json, name=environment" })
  environment?: string;
}
