import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Definition } from "./definition";



// Header
/** 
 * Type that defines the headers for the dimension keys and metrics returned in the report.
**/
export class Header extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensionKeys", elemType: Definition })
  dimensionKeys?: Definition[];

  @SpeakeasyMetadata({ data: "json, name=metrics", elemType: Definition })
  metrics?: Definition[];
}
