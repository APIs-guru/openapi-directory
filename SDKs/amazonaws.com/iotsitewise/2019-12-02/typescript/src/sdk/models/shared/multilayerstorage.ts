import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomerManagedS3Storage } from "./customermanageds3storage";



// MultiLayerStorage
/** 
 * Contains information about the storage destination.
**/
export class MultiLayerStorage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customerManagedS3Storage" })
  customerManagedS3Storage: CustomerManagedS3Storage;
}
