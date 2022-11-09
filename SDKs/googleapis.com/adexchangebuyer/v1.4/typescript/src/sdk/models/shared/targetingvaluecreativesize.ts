import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TargetingValueSize } from "./targetingvaluesize";
import { TargetingValueSize } from "./targetingvaluesize";


// TargetingValueCreativeSize
/** 
 * Next Id: 7
**/
export class TargetingValueCreativeSize extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedFormats" })
  allowedFormats?: string[];

  @Metadata({ data: "json, name=companionSizes", elemType: shared.TargetingValueSize })
  companionSizes?: TargetingValueSize[];

  @Metadata({ data: "json, name=creativeSizeType" })
  creativeSizeType?: string;

  @Metadata({ data: "json, name=nativeTemplate" })
  nativeTemplate?: string;

  @Metadata({ data: "json, name=size" })
  size?: TargetingValueSize;

  @Metadata({ data: "json, name=skippableAdType" })
  skippableAdType?: string;
}
