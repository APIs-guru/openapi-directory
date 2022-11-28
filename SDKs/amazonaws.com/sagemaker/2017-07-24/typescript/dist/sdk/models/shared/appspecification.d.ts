import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration to run a processing job in a specified container image.
**/
export declare class AppSpecification extends SpeakeasyBase {
    containerArguments?: string[];
    containerEntrypoint?: string[];
    imageUri: string;
}
