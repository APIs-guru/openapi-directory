import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateDeploymentResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=location" })
  location?: string;
}
