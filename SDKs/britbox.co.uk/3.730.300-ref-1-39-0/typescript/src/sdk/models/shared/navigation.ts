import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NavEntry } from "./naventry";
import { NavEntry } from "./naventry";
import { NavEntry } from "./naventry";
import { NavEntry } from "./naventry";


export class Navigation extends SpeakeasyBase {
  @Metadata({ data: "json, name=account" })
  account?: NavEntry;

  @Metadata({ data: "json, name=copyright" })
  copyright?: string;

  @Metadata({ data: "json, name=customFields" })
  customFields?: Map<string, any>;

  @Metadata({ data: "json, name=footer" })
  footer?: NavEntry;

  @Metadata({ data: "json, name=header", elemType: shared.NavEntry })
  header: NavEntry[];

  @Metadata({ data: "json, name=mobile" })
  mobile?: NavEntry;
}
