import { SpeakeasyBase } from "../../../internal/utils";
import { ImportAptArtifactsGcsSource } from "./importaptartifactsgcssource";
/**
 * The request to import new apt artifacts.
**/
export declare class ImportAptArtifactsRequest extends SpeakeasyBase {
    gcsSource?: ImportAptArtifactsGcsSource;
}
