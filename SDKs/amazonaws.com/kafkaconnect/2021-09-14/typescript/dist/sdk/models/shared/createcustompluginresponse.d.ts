import { SpeakeasyBase } from "../../../internal/utils";
import { CustomPluginStateEnum } from "./custompluginstateenum";
export declare class CreateCustomPluginResponse extends SpeakeasyBase {
    customPluginArn?: string;
    customPluginState?: CustomPluginStateEnum;
    name?: string;
    revision?: number;
}
