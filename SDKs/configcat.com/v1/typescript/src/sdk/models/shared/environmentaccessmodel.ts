import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentAccessTypeEnum } from "./environmentaccesstypeenum";



export class EnvironmentAccessModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environmentAccessType" })
  environmentAccessType?: EnvironmentAccessTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=environmentId" })
  environmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
