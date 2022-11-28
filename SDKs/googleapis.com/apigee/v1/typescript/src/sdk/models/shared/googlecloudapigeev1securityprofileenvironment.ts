import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudApigeeV1SecurityProfileEnvironment
/** 
 * Environment information of attached environments. Scoring an environment is enabled only if it is attached to a security profile.
**/
export class GoogleCloudApigeeV1SecurityProfileEnvironment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachTime" })
  attachTime?: string;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: string;
}
