import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PretargetingConfig } from "./pretargetingconfig";


export class PretargetingConfigList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.PretargetingConfig })
  items?: PretargetingConfig[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
