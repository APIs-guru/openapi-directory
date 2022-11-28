import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about the number of objects that are in an S3 bucket and use certain types of server-side encryption, use client-side encryption, or aren't encrypted.
**/
export declare class ObjectCountByEncryptionType extends SpeakeasyBase {
    customerManaged?: number;
    kmsManaged?: number;
    s3Managed?: number;
    unencrypted?: number;
    unknown?: number;
}
