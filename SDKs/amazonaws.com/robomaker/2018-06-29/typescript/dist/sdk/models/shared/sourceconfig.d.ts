import { SpeakeasyBase } from "../../../internal/utils";
import { ArchitectureEnum } from "./architectureenum";
/**
 * Information about a source configuration.
**/
export declare class SourceConfig extends SpeakeasyBase {
    architecture?: ArchitectureEnum;
    s3Bucket?: string;
    s3Key?: string;
}
