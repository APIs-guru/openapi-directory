import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Volume } from "./volume";



// ListVolumesResponse
/** 
 * Response message containing the list of storage volumes.
**/
export class ListVolumesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];

  @SpeakeasyMetadata({ data: "json, name=volumes", elemType: Volume })
  volumes?: Volume[];
}
