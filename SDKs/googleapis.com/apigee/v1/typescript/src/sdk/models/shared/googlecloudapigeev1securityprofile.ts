import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1SecurityProfileEnvironment } from "./googlecloudapigeev1securityprofileenvironment";
import { GoogleCloudApigeeV1SecurityProfileScoringConfig } from "./googlecloudapigeev1securityprofilescoringconfig";



// GoogleCloudApigeeV1SecurityProfile
/** 
 * Represents a SecurityProfile resource.
**/
export class GoogleCloudApigeeV1SecurityProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=environments", elemType: GoogleCloudApigeeV1SecurityProfileEnvironment })
  environments?: GoogleCloudApigeeV1SecurityProfileEnvironment[];

  @SpeakeasyMetadata({ data: "json, name=maxScore" })
  maxScore?: number;

  @SpeakeasyMetadata({ data: "json, name=minScore" })
  minScore?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=revisionCreateTime" })
  revisionCreateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=revisionId" })
  revisionId?: string;

  @SpeakeasyMetadata({ data: "json, name=revisionPublishTime" })
  revisionPublishTime?: string;

  @SpeakeasyMetadata({ data: "json, name=revisionUpdateTime" })
  revisionUpdateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=scoringConfigs", elemType: GoogleCloudApigeeV1SecurityProfileScoringConfig })
  scoringConfigs?: GoogleCloudApigeeV1SecurityProfileScoringConfig[];
}
