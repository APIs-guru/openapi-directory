import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Api } from "./api";


// ListApisResponse
/** 
 * Response message for ListApis.
**/
export class ListApisResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=apis", elemType: shared.Api })
  apis?: Api[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
