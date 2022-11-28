import { SpeakeasyBase } from "../../../internal/utils";
import { ArchitectureEnum } from "./architectureenum";
/**
 * Information about a source.
**/
export declare class Source extends SpeakeasyBase {
    architecture?: ArchitectureEnum;
    etag?: string;
    s3Bucket?: string;
    s3Key?: string;
}
