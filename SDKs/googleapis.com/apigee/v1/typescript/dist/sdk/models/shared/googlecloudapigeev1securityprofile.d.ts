import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1SecurityProfileEnvironment } from "./googlecloudapigeev1securityprofileenvironment";
import { GoogleCloudApigeeV1SecurityProfileScoringConfig } from "./googlecloudapigeev1securityprofilescoringconfig";
/**
 * Represents a SecurityProfile resource.
**/
export declare class GoogleCloudApigeeV1SecurityProfile extends SpeakeasyBase {
    displayName?: string;
    environments?: GoogleCloudApigeeV1SecurityProfileEnvironment[];
    maxScore?: number;
    minScore?: number;
    name?: string;
    revisionCreateTime?: string;
    revisionId?: string;
    revisionPublishTime?: string;
    revisionUpdateTime?: string;
    scoringConfigs?: GoogleCloudApigeeV1SecurityProfileScoringConfig[];
}
