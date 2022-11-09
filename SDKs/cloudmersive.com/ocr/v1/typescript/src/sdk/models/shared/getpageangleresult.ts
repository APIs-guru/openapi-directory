import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetPageAngleResult
/** 
 * Result of performing a get-page-angle operation
**/
export class GetPageAngleResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Angle" })
  angle?: number;

  @Metadata({ data: "json, name=Successful" })
  successful?: boolean;
}
