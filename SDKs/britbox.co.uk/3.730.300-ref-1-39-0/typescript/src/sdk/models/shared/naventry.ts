import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NavEntry } from "./naventry";
import { NavContent } from "./navcontent";


export class NavEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=children", elemType: shared.NavEntry })
  children?: NavEntry[];

  @Metadata({ data: "json, name=content" })
  content?: NavContent;

  @Metadata({ data: "json, name=customFields" })
  customFields?: Map<string, any>;

  @Metadata({ data: "json, name=depth" })
  depth: number;

  @Metadata({ data: "json, name=featured" })
  featured?: boolean;

  @Metadata({ data: "json, name=icon" })
  icon?: string;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;
}
