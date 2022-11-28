import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsRedshiftClusterResizeInfo
/** 
 * Information about the resize operation for the cluster.
**/
export class AwsRedshiftClusterResizeInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllowCancelResize" })
  allowCancelResize?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ResizeType" })
  resizeType?: string;
}
