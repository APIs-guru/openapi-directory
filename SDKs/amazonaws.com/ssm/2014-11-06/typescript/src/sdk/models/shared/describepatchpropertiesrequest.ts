import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OperatingSystemEnum } from "./operatingsystemenum";
import { PatchSetEnum } from "./patchsetenum";
import { PatchPropertyEnum } from "./patchpropertyenum";



export class DescribePatchPropertiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=OperatingSystem" })
  operatingSystem: OperatingSystemEnum;

  @SpeakeasyMetadata({ data: "json, name=PatchSet" })
  patchSet?: PatchSetEnum;

  @SpeakeasyMetadata({ data: "json, name=Property" })
  property: PatchPropertyEnum;
}
