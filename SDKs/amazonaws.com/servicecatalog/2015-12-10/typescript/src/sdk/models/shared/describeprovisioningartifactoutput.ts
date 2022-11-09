import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProvisioningArtifactDetail } from "./provisioningartifactdetail";
import { StatusEnum } from "./statusenum";


export class DescribeProvisioningArtifactOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Info" })
  info?: Map<string, string>;

  @Metadata({ data: "json, name=ProvisioningArtifactDetail" })
  provisioningArtifactDetail?: ProvisioningArtifactDetail;

  @Metadata({ data: "json, name=Status" })
  status?: StatusEnum;
}
