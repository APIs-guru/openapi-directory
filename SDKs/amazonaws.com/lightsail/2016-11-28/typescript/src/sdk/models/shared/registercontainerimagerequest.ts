import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegisterContainerImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=digest" })
  digest: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName: string;
}
