import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RunnerNoLabels extends SpeakeasyBase {
  @Metadata({ data: "json, name=busy" })
  busy?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=os" })
  os?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
