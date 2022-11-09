import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ProvisioningArtifactView } from "./provisioningartifactview";
export declare class ListProvisioningArtifactsForServiceActionOutput extends SpeakeasyBase {
    nextPageToken?: string;
    provisioningArtifactViews?: ProvisioningArtifactView[];
}
