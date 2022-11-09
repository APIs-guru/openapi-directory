import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomPluginStateEnum } from "./custompluginstateenum";
import { CustomPluginRevisionSummary } from "./custompluginrevisionsummary";
/**
 * A summary of the custom plugin.
**/
export declare class CustomPluginSummary extends SpeakeasyBase {
    creationTime?: Date;
    customPluginArn?: string;
    customPluginState?: CustomPluginStateEnum;
    description?: string;
    latestRevision?: CustomPluginRevisionSummary;
    name?: string;
}
