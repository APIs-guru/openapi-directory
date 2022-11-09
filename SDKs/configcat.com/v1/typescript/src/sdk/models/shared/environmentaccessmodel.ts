import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EnvironmentAccessTypeEnum } from "./environmentaccesstypeenum";


export class EnvironmentAccessModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=environmentAccessType" })
  environmentAccessType?: EnvironmentAccessTypeEnum;

  @Metadata({ data: "json, name=environmentId" })
  environmentId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
