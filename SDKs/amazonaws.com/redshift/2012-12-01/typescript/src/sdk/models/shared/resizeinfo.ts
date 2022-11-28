import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResizeInfo
/** 
 * Describes a resize operation.
**/
export class ResizeInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allowCancelResize?: boolean;

  @SpeakeasyMetadata()
  resizeType?: string;
}
