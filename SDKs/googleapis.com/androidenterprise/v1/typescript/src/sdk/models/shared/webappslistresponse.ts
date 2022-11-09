import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WebApp } from "./webapp";


export class WebAppsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=webApp", elemType: shared.WebApp })
  webApp?: WebApp[];
}
