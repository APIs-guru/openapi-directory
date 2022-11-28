import { SpeakeasyBase } from "../../../internal/utils";
import { StudioComponentConfiguration } from "./studiocomponentconfiguration";
import { StudioComponentInitializationScript } from "./studiocomponentinitializationscript";
import { ScriptParameterKeyValue } from "./scriptparameterkeyvalue";
import { StudioComponentStateEnum } from "./studiocomponentstateenum";
import { StudioComponentStatusCodeEnum } from "./studiocomponentstatuscodeenum";
import { StudioComponentSubtypeEnum } from "./studiocomponentsubtypeenum";
import { StudioComponentTypeEnum } from "./studiocomponenttypeenum";
/**
 * A network that is used by a studio’s users and workflows, including render farm, Active Directory, licensing, and file system.
**/
export declare class StudioComponent extends SpeakeasyBase {
    arn?: string;
    configuration?: StudioComponentConfiguration;
    createdAt?: Date;
    createdBy?: string;
    description?: string;
    ec2SecurityGroupIds?: string[];
    initializationScripts?: StudioComponentInitializationScript[];
    name?: string;
    scriptParameters?: ScriptParameterKeyValue[];
    state?: StudioComponentStateEnum;
    statusCode?: StudioComponentStatusCodeEnum;
    statusMessage?: string;
    studioComponentId?: string;
    subtype?: StudioComponentSubtypeEnum;
    tags?: Map<string, string>;
    type?: StudioComponentTypeEnum;
    updatedAt?: Date;
    updatedBy?: string;
}
