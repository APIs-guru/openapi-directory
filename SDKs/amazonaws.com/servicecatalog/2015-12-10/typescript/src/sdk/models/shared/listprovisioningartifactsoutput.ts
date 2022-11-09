import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProvisioningArtifactDetail } from "./provisioningartifactdetail";


export class ListProvisioningArtifactsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=ProvisioningArtifactDetails", elemType: shared.ProvisioningArtifactDetail })
  provisioningArtifactDetails?: ProvisioningArtifactDetail[];
}
