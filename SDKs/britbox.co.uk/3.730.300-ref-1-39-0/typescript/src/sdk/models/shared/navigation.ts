import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NavEntry } from "./naventry";



export class Navigation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: NavEntry;

  @SpeakeasyMetadata({ data: "json, name=copyright" })
  copyright?: string;

  @SpeakeasyMetadata({ data: "json, name=customFields" })
  customFields?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=footer" })
  footer?: NavEntry;

  @SpeakeasyMetadata({ data: "json, name=header", elemType: NavEntry })
  header: NavEntry[];

  @SpeakeasyMetadata({ data: "json, name=mobile" })
  mobile?: NavEntry;
}
