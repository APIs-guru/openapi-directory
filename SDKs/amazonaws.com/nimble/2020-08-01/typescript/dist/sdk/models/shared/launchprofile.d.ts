import { SpeakeasyBase } from "../../../internal/utils";
import { LaunchProfileStateEnum } from "./launchprofilestateenum";
import { LaunchProfileStatusCodeEnum } from "./launchprofilestatuscodeenum";
import { StreamConfiguration } from "./streamconfiguration";
export declare class LaunchProfile extends SpeakeasyBase {
    arn?: string;
    createdAt?: Date;
    createdBy?: string;
    description?: string;
    ec2SubnetIds?: string[];
    launchProfileId?: string;
    launchProfileProtocolVersions?: string[];
    name?: string;
    state?: LaunchProfileStateEnum;
    statusCode?: LaunchProfileStatusCodeEnum;
    statusMessage?: string;
    streamConfiguration?: StreamConfiguration;
    studioComponentIds?: string[];
    tags?: Map<string, string>;
    updatedAt?: Date;
    updatedBy?: string;
}
