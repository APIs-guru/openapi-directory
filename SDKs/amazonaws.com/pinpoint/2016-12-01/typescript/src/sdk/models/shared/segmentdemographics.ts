import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SetDimension } from "./setdimension";



// SegmentDemographics
/** 
 * Specifies demographic-based dimension settings for including or excluding endpoints from a segment. These settings derive from characteristics of endpoint devices, such as platform, make, and model.
**/
export class SegmentDemographics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppVersion" })
  appVersion?: SetDimension;

  @SpeakeasyMetadata({ data: "json, name=Channel" })
  channel?: SetDimension;

  @SpeakeasyMetadata({ data: "json, name=DeviceType" })
  deviceType?: SetDimension;

  @SpeakeasyMetadata({ data: "json, name=Make" })
  make?: SetDimension;

  @SpeakeasyMetadata({ data: "json, name=Model" })
  model?: SetDimension;

  @SpeakeasyMetadata({ data: "json, name=Platform" })
  platform?: SetDimension;
}
