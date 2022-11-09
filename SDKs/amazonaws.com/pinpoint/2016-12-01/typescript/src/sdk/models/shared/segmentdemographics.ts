import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SetDimension } from "./setdimension";
import { SetDimension } from "./setdimension";
import { SetDimension } from "./setdimension";
import { SetDimension } from "./setdimension";
import { SetDimension } from "./setdimension";
import { SetDimension } from "./setdimension";


// SegmentDemographics
/** 
 * Specifies demographic-based dimension settings for including or excluding endpoints from a segment. These settings derive from characteristics of endpoint devices, such as platform, make, and model.
**/
export class SegmentDemographics extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppVersion" })
  appVersion?: SetDimension;

  @Metadata({ data: "json, name=Channel" })
  channel?: SetDimension;

  @Metadata({ data: "json, name=DeviceType" })
  deviceType?: SetDimension;

  @Metadata({ data: "json, name=Make" })
  make?: SetDimension;

  @Metadata({ data: "json, name=Model" })
  model?: SetDimension;

  @Metadata({ data: "json, name=Platform" })
  platform?: SetDimension;
}
