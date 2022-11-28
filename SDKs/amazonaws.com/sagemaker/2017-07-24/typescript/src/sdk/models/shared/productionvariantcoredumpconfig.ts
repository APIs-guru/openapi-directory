import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProductionVariantCoreDumpConfig
/** 
 * Specifies configuration for a core dump from the model container when the process crashes.
**/
export class ProductionVariantCoreDumpConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DestinationS3Uri" })
  destinationS3Uri: string;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;
}
