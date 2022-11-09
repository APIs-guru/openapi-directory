import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1SecurityProfileEnvironment } from "./googlecloudapigeev1securityprofileenvironment";
import { GoogleCloudApigeeV1SecurityProfileScoringConfig } from "./googlecloudapigeev1securityprofilescoringconfig";


// GoogleCloudApigeeV1SecurityProfile
/** 
 * Represents a SecurityProfile resource.
**/
export class GoogleCloudApigeeV1SecurityProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=environments", elemType: shared.GoogleCloudApigeeV1SecurityProfileEnvironment })
  environments?: GoogleCloudApigeeV1SecurityProfileEnvironment[];

  @Metadata({ data: "json, name=maxScore" })
  maxScore?: number;

  @Metadata({ data: "json, name=minScore" })
  minScore?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=revisionCreateTime" })
  revisionCreateTime?: string;

  @Metadata({ data: "json, name=revisionId" })
  revisionId?: string;

  @Metadata({ data: "json, name=revisionPublishTime" })
  revisionPublishTime?: string;

  @Metadata({ data: "json, name=revisionUpdateTime" })
  revisionUpdateTime?: string;

  @Metadata({ data: "json, name=scoringConfigs", elemType: shared.GoogleCloudApigeeV1SecurityProfileScoringConfig })
  scoringConfigs?: GoogleCloudApigeeV1SecurityProfileScoringConfig[];
}
