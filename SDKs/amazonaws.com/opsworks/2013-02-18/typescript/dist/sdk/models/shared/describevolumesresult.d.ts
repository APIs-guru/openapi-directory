import { SpeakeasyBase } from "../../../internal/utils";
import { Volume } from "./volume";
/**
 * Contains the response to a <code>DescribeVolumes</code> request.
**/
export declare class DescribeVolumesResult extends SpeakeasyBase {
    volumes?: Volume[];
}
