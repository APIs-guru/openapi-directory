import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegisterContainerImageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=digest" })
  digest: string;

  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=serviceName" })
  serviceName: string;
}
