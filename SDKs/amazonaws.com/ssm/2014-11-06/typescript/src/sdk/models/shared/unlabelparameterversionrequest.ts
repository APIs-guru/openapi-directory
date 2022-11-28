import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UnlabelParameterVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Labels" })
  labels: string[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=ParameterVersion" })
  parameterVersion: number;
}
