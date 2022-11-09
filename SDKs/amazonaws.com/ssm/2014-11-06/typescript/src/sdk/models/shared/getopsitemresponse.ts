import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OpsItem } from "./opsitem";


export class GetOpsItemResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=OpsItem" })
  opsItem?: OpsItem;
}
