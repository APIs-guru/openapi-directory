import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Application } from "./application";


// ApplicationsListResponse
/** 
 * Template for a collection of Applications.
**/
export class ApplicationsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=applications", elemType: shared.Application })
  applications?: Application[];

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
