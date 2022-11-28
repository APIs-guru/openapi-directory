import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateDeploymentResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;
}
