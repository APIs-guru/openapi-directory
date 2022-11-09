import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsRedshiftClusterResizeInfo
/** 
 * Information about the resize operation for the cluster.
**/
export class AwsRedshiftClusterResizeInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllowCancelResize" })
  allowCancelResize?: boolean;

  @Metadata({ data: "json, name=ResizeType" })
  resizeType?: string;
}
