import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationResponse } from "./applicationresponse";



// ApplicationsResponse
/** 
 * Provides information about all of your applications.
**/
export class ApplicationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Item", elemType: ApplicationResponse })
  item?: ApplicationResponse[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
