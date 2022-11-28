import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProvisioningArtifactDetail } from "./provisioningartifactdetail";



export class ListProvisioningArtifactsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisioningArtifactDetails", elemType: ProvisioningArtifactDetail })
  provisioningArtifactDetails?: ProvisioningArtifactDetail[];
}
