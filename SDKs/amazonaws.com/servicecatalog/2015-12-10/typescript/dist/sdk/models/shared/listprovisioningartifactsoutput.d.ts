import { SpeakeasyBase } from "../../../internal/utils";
import { ProvisioningArtifactDetail } from "./provisioningartifactdetail";
export declare class ListProvisioningArtifactsOutput extends SpeakeasyBase {
    nextPageToken?: string;
    provisioningArtifactDetails?: ProvisioningArtifactDetail[];
}
