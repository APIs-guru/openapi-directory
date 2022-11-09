import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ObjectCountByEncryptionType
/** 
 * Provides information about the number of objects that are in an S3 bucket and use certain types of server-side encryption, use client-side encryption, or aren't encrypted.
**/
export class ObjectCountByEncryptionType extends SpeakeasyBase {
  @Metadata({ data: "json, name=customerManaged" })
  customerManaged?: number;

  @Metadata({ data: "json, name=kmsManaged" })
  kmsManaged?: number;

  @Metadata({ data: "json, name=s3Managed" })
  s3Managed?: number;

  @Metadata({ data: "json, name=unencrypted" })
  unencrypted?: number;

  @Metadata({ data: "json, name=unknown" })
  unknown?: number;
}
