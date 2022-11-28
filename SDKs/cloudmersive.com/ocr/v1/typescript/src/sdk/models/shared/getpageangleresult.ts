import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetPageAngleResult
/** 
 * Result of performing a get-page-angle operation
**/
export class GetPageAngleResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Angle" })
  angle?: number;

  @SpeakeasyMetadata({ data: "json, name=Successful" })
  successful?: boolean;
}
