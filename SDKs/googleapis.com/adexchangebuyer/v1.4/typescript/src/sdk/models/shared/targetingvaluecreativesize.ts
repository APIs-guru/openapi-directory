import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TargetingValueSize } from "./targetingvaluesize";



// TargetingValueCreativeSize
/** 
 * Next Id: 7
**/
export class TargetingValueCreativeSize extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedFormats" })
  allowedFormats?: string[];

  @SpeakeasyMetadata({ data: "json, name=companionSizes", elemType: TargetingValueSize })
  companionSizes?: TargetingValueSize[];

  @SpeakeasyMetadata({ data: "json, name=creativeSizeType" })
  creativeSizeType?: string;

  @SpeakeasyMetadata({ data: "json, name=nativeTemplate" })
  nativeTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: TargetingValueSize;

  @SpeakeasyMetadata({ data: "json, name=skippableAdType" })
  skippableAdType?: string;
}
