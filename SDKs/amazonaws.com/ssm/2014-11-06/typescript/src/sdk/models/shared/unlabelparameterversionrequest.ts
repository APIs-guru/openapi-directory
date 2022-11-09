import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UnlabelParameterVersionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Labels" })
  labels: string[];

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=ParameterVersion" })
  parameterVersion: number;
}
