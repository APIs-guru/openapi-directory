import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProvisioningArtifactDetail } from "./provisioningartifactdetail";
import { StatusEnum } from "./statusenum";



export class CreateProvisioningArtifactOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Info" })
  info?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=ProvisioningArtifactDetail" })
  provisioningArtifactDetail?: ProvisioningArtifactDetail;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: StatusEnum;
}
