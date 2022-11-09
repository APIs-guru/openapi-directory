import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Step
/** 
 *  Represents an element of a leg within a route. A step contains instructions for how to move to the next step in the leg. 
**/
export class Step extends SpeakeasyBase {
  @Metadata({ data: "json, name=Distance" })
  distance: number;

  @Metadata({ data: "json, name=DurationSeconds" })
  durationSeconds: number;

  @Metadata({ data: "json, name=EndPosition" })
  endPosition: number[];

  @Metadata({ data: "json, name=GeometryOffset" })
  geometryOffset?: number;

  @Metadata({ data: "json, name=StartPosition" })
  startPosition: number[];
}
