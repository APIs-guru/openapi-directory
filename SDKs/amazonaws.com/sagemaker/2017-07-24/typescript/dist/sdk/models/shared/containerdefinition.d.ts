import { SpeakeasyBase } from "../../../internal/utils";
import { ImageConfig } from "./imageconfig";
import { ContainerModeEnum } from "./containermodeenum";
import { MultiModelConfig } from "./multimodelconfig";
/**
 * Describes the container, as part of model definition.
**/
export declare class ContainerDefinition extends SpeakeasyBase {
    containerHostname?: string;
    environment?: Map<string, string>;
    image?: string;
    imageConfig?: ImageConfig;
    mode?: ContainerModeEnum;
    modelDataUrl?: string;
    modelPackageName?: string;
    multiModelConfig?: MultiModelConfig;
}
