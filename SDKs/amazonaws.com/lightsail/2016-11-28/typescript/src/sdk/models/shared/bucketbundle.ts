import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BucketBundle
/** 
 * <p>Describes the specifications of a bundle that can be applied to an Amazon Lightsail bucket.</p> <p>A bucket bundle specifies the monthly cost, storage space, and data transfer quota for a bucket.</p>
**/
export class BucketBundle extends SpeakeasyBase {
  @Metadata({ data: "json, name=bundleId" })
  bundleId?: string;

  @Metadata({ data: "json, name=isActive" })
  isActive?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=price" })
  price?: number;

  @Metadata({ data: "json, name=storagePerMonthInGb" })
  storagePerMonthInGb?: number;

  @Metadata({ data: "json, name=transferPerMonthInGb" })
  transferPerMonthInGb?: number;
}
