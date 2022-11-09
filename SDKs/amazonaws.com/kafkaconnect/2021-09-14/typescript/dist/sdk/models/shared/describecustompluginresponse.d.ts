import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomPluginStateEnum } from "./custompluginstateenum";
import { CustomPluginRevisionSummary } from "./custompluginrevisionsummary";
export declare class DescribeCustomPluginResponse extends SpeakeasyBase {
    creationTime?: Date;
    customPluginArn?: string;
    customPluginState?: CustomPluginStateEnum;
    description?: string;
    latestRevision?: CustomPluginRevisionSummary;
    name?: string;
}
