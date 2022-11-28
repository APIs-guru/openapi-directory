import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RunnerNoLabels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=busy" })
  busy?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=os" })
  os?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
