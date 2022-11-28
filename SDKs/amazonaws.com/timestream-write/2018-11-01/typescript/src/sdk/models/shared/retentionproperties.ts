import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RetentionProperties
/** 
 * Retention properties contain the duration for which your time series data must be stored in the magnetic store and the memory store. 
**/
export class RetentionProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MagneticStoreRetentionPeriodInDays" })
  magneticStoreRetentionPeriodInDays: number;

  @SpeakeasyMetadata({ data: "json, name=MemoryStoreRetentionPeriodInHours" })
  memoryStoreRetentionPeriodInHours: number;
}
