import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ComputeResource
/** 
 * Compute resource requirements
**/
export class ComputeResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bootDiskMib" })
  bootDiskMib?: string;

  @SpeakeasyMetadata({ data: "json, name=cpuMilli" })
  cpuMilli?: string;

  @SpeakeasyMetadata({ data: "json, name=memoryMib" })
  memoryMib?: string;
}
