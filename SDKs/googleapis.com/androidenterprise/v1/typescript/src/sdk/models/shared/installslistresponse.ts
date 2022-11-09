import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Install } from "./install";


export class InstallsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=install", elemType: shared.Install })
  install?: Install[];
}
