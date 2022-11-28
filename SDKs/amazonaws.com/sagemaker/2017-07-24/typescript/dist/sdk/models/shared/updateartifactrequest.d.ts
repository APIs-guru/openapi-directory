import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateArtifactRequest extends SpeakeasyBase {
    artifactArn: string;
    artifactName?: string;
    properties?: Map<string, string>;
    propertiesToRemove?: string[];
}
