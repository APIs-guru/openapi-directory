import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WebApp } from "./webapp";



export class WebAppsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=webApp", elemType: WebApp })
  webApp?: WebApp[];
}
