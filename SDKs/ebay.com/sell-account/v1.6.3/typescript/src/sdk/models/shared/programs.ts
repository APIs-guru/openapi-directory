import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Program } from "./program";



// Programs
/** 
 * A list of the supported seller programs.
**/
export class Programs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=programs", elemType: Program })
  programs?: Program[];
}
