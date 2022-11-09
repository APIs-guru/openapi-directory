import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProvisioningArtifactView } from "./provisioningartifactview";


export class ListProvisioningArtifactsForServiceActionOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=ProvisioningArtifactViews", elemType: shared.ProvisioningArtifactView })
  provisioningArtifactViews?: ProvisioningArtifactView[];
}
