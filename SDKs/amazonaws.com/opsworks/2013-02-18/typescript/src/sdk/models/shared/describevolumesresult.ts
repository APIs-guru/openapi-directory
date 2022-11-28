import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Volume } from "./volume";



// DescribeVolumesResult
/** 
 * Contains the response to a <code>DescribeVolumes</code> request.
**/
export class DescribeVolumesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Volumes", elemType: Volume })
  volumes?: Volume[];
}
