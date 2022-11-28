import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ObjectCountByEncryptionType
/** 
 * Provides information about the number of objects that are in an S3 bucket and use certain types of server-side encryption, use client-side encryption, or aren't encrypted.
**/
export class ObjectCountByEncryptionType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customerManaged" })
  customerManaged?: number;

  @SpeakeasyMetadata({ data: "json, name=kmsManaged" })
  kmsManaged?: number;

  @SpeakeasyMetadata({ data: "json, name=s3Managed" })
  s3Managed?: number;

  @SpeakeasyMetadata({ data: "json, name=unencrypted" })
  unencrypted?: number;

  @SpeakeasyMetadata({ data: "json, name=unknown" })
  unknown?: number;
}
