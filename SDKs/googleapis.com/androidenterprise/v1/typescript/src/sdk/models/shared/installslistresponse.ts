import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Install } from "./install";



export class InstallsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=install", elemType: Install })
  install?: Install[];
}
