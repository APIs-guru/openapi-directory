import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A list of container definitions that describe the different containers that make up an AutoML candidate. For more information, see .
**/
export declare class AutoMlContainerDefinition extends SpeakeasyBase {
    environment?: Map<string, string>;
    image: string;
    modelDataUrl: string;
}
