import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the Docker container for the model package.
**/
export declare class ModelPackageContainerDefinition extends SpeakeasyBase {
    containerHostname?: string;
    environment?: Map<string, string>;
    image: string;
    imageDigest?: string;
    modelDataUrl?: string;
    productId?: string;
}
