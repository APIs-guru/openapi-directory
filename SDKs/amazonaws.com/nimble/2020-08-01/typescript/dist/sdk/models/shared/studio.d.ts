import { SpeakeasyBase } from "../../../internal/utils";
import { StudioStateEnum } from "./studiostateenum";
import { StudioStatusCodeEnum } from "./studiostatuscodeenum";
import { StudioEncryptionConfiguration } from "./studioencryptionconfiguration";
export declare class Studio extends SpeakeasyBase {
    adminRoleArn?: string;
    arn?: string;
    createdAt?: Date;
    displayName?: string;
    homeRegion?: string;
    ssoClientId?: string;
    state?: StudioStateEnum;
    statusCode?: StudioStatusCodeEnum;
    statusMessage?: string;
    studioEncryptionConfiguration?: StudioEncryptionConfiguration;
    studioId?: string;
    studioName?: string;
    studioUrl?: string;
    tags?: Map<string, string>;
    updatedAt?: Date;
    userRoleArn?: string;
}
