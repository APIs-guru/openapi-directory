import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Definition } from "./definition";
import { Definition } from "./definition";


// Header
/** 
 * Type that defines the headers for the dimension keys and metrics returned in the report.
**/
export class Header extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensionKeys", elemType: shared.Definition })
  dimensionKeys?: Definition[];

  @Metadata({ data: "json, name=metrics", elemType: shared.Definition })
  metrics?: Definition[];
}
