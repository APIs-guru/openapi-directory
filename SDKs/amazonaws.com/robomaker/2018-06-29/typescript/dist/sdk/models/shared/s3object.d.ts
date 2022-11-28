import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about an S3 object.
**/
export declare class S3Object extends SpeakeasyBase {
    bucket: string;
    etag?: string;
    key: string;
}
