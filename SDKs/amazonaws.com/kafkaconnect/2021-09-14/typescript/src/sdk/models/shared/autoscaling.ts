import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScaleInPolicy } from "./scaleinpolicy";
import { ScaleOutPolicy } from "./scaleoutpolicy";



// AutoScaling
/** 
 * Specifies how the connector scales.
**/
export class AutoScaling extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxWorkerCount" })
  maxWorkerCount: number;

  @SpeakeasyMetadata({ data: "json, name=mcuCount" })
  mcuCount: number;

  @SpeakeasyMetadata({ data: "json, name=minWorkerCount" })
  minWorkerCount: number;

  @SpeakeasyMetadata({ data: "json, name=scaleInPolicy" })
  scaleInPolicy?: ScaleInPolicy;

  @SpeakeasyMetadata({ data: "json, name=scaleOutPolicy" })
  scaleOutPolicy?: ScaleOutPolicy;
}
