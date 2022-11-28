import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A plugin is an AWS resource that contains the code that defines a connector's logic.
**/
export declare class CustomPlugin extends SpeakeasyBase {
    customPluginArn: string;
    revision: number;
}
