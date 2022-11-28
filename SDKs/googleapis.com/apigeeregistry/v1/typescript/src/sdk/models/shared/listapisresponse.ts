import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Api } from "./api";



// ListApisResponse
/** 
 * Response message for ListApis.
**/
export class ListApisResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apis", elemType: Api })
  apis?: Api[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
