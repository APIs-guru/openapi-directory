import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OpsItem } from "./opsitem";



export class GetOpsItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OpsItem" })
  opsItem?: OpsItem;
}
