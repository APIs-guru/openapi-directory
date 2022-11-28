import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Step
/** 
 *  Represents an element of a leg within a route. A step contains instructions for how to move to the next step in the leg. 
**/
export class Step extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Distance" })
  distance: number;

  @SpeakeasyMetadata({ data: "json, name=DurationSeconds" })
  durationSeconds: number;

  @SpeakeasyMetadata({ data: "json, name=EndPosition" })
  endPosition: number[];

  @SpeakeasyMetadata({ data: "json, name=GeometryOffset" })
  geometryOffset?: number;

  @SpeakeasyMetadata({ data: "json, name=StartPosition" })
  startPosition: number[];
}
