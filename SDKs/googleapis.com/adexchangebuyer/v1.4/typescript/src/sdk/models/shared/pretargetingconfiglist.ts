import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PretargetingConfig } from "./pretargetingconfig";



export class PretargetingConfigList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: PretargetingConfig })
  items?: PretargetingConfig[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
