import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SiteBinding } from "./sitebinding";



export class WindowsSite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bindings", elemType: SiteBinding })
  bindings?: SiteBinding[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;
}
