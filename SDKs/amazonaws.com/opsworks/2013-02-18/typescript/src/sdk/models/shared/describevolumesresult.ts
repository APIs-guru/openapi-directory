import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Volume } from "./volume";


// DescribeVolumesResult
/** 
 * Contains the response to a <code>DescribeVolumes</code> request.
**/
export class DescribeVolumesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Volumes", elemType: shared.Volume })
  volumes?: Volume[];
}
