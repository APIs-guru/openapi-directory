import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Application } from "./application";



// ApplicationsListResponse
/** 
 * Template for a collection of Applications.
**/
export class ApplicationsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applications", elemType: Application })
  applications?: Application[];

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
