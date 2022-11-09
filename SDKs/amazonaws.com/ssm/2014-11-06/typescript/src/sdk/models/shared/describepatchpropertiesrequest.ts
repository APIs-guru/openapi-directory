import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OperatingSystemEnum } from "./operatingsystemenum";
import { PatchSetEnum } from "./patchsetenum";
import { PatchPropertyEnum } from "./patchpropertyenum";


export class DescribePatchPropertiesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=OperatingSystem" })
  operatingSystem: OperatingSystemEnum;

  @Metadata({ data: "json, name=PatchSet" })
  patchSet?: PatchSetEnum;

  @Metadata({ data: "json, name=Property" })
  property: PatchPropertyEnum;
}
