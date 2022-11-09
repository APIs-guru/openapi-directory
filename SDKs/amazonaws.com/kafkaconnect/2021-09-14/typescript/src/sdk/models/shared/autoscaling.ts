import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ScaleInPolicy } from "./scaleinpolicy";
import { ScaleOutPolicy } from "./scaleoutpolicy";


// AutoScaling
/** 
 * Specifies how the connector scales.
**/
export class AutoScaling extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxWorkerCount" })
  maxWorkerCount: number;

  @Metadata({ data: "json, name=mcuCount" })
  mcuCount: number;

  @Metadata({ data: "json, name=minWorkerCount" })
  minWorkerCount: number;

  @Metadata({ data: "json, name=scaleInPolicy" })
  scaleInPolicy?: ScaleInPolicy;

  @Metadata({ data: "json, name=scaleOutPolicy" })
  scaleOutPolicy?: ScaleOutPolicy;
}
