import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BucketBundle
/** 
 * <p>Describes the specifications of a bundle that can be applied to an Amazon Lightsail bucket.</p> <p>A bucket bundle specifies the monthly cost, storage space, and data transfer quota for a bucket.</p>
**/
export class BucketBundle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bundleId" })
  bundleId?: string;

  @SpeakeasyMetadata({ data: "json, name=isActive" })
  isActive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=storagePerMonthInGb" })
  storagePerMonthInGb?: number;

  @SpeakeasyMetadata({ data: "json, name=transferPerMonthInGb" })
  transferPerMonthInGb?: number;
}
