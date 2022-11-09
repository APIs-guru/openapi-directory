import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomPluginSummary } from "./custompluginsummary";
export declare class ListCustomPluginsResponse extends SpeakeasyBase {
    customPlugins?: CustomPluginSummary[];
    nextToken?: string;
}
