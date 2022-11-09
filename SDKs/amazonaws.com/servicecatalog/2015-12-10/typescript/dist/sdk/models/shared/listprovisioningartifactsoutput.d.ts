import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ProvisioningArtifactDetail } from "./provisioningartifactdetail";
export declare class ListProvisioningArtifactsOutput extends SpeakeasyBase {
    nextPageToken?: string;
    provisioningArtifactDetails?: ProvisioningArtifactDetail[];
}
