import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RetentionProperties
/** 
 * Retention properties contain the duration for which your time series data must be stored in the magnetic store and the memory store. 
**/
export class RetentionProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=MagneticStoreRetentionPeriodInDays" })
  magneticStoreRetentionPeriodInDays: number;

  @Metadata({ data: "json, name=MemoryStoreRetentionPeriodInHours" })
  memoryStoreRetentionPeriodInHours: number;
}
