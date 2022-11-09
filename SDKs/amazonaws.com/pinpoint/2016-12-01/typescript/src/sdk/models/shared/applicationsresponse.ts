import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApplicationResponse } from "./applicationresponse";


// ApplicationsResponse
/** 
 * Provides information about all of your applications.
**/
export class ApplicationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Item", elemType: shared.ApplicationResponse })
  item?: ApplicationResponse[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
