import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GcpUserAccessBinding } from "./gcpuseraccessbinding";



// ListGcpUserAccessBindingsResponse
/** 
 * Response of ListGcpUserAccessBindings.
**/
export class ListGcpUserAccessBindingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcpUserAccessBindings", elemType: GcpUserAccessBinding })
  gcpUserAccessBindings?: GcpUserAccessBinding[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
