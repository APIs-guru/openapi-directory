import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NavContent } from "./navcontent";



export class NavEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=children", elemType: NavEntry })
  children?: NavEntry[];

  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: NavContent;

  @SpeakeasyMetadata({ data: "json, name=customFields" })
  customFields?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=depth" })
  depth: number;

  @SpeakeasyMetadata({ data: "json, name=featured" })
  featured?: boolean;

  @SpeakeasyMetadata({ data: "json, name=icon" })
  icon?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;
}
