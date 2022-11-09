import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SiteBinding } from "./sitebinding";


export class WindowsSite extends SpeakeasyBase {
  @Metadata({ data: "json, name=bindings", elemType: shared.SiteBinding })
  bindings?: SiteBinding[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;
}
