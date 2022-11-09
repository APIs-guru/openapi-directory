import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomerManagedS3Storage } from "./customermanageds3storage";


// MultiLayerStorage
/** 
 * Contains information about the storage destination.
**/
export class MultiLayerStorage extends SpeakeasyBase {
  @Metadata({ data: "json, name=customerManagedS3Storage" })
  customerManagedS3Storage: CustomerManagedS3Storage;
}
