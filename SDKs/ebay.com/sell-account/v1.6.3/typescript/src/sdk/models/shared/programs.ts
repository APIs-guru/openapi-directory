import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Program } from "./program";


// Programs
/** 
 * A list of the supported seller programs.
**/
export class Programs extends SpeakeasyBase {
  @Metadata({ data: "json, name=programs", elemType: shared.Program })
  programs?: Program[];
}
