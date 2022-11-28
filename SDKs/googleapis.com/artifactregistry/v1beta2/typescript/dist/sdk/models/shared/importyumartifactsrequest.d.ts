import { SpeakeasyBase } from "../../../internal/utils";
import { ImportYumArtifactsGcsSource } from "./importyumartifactsgcssource";
/**
 * The request to import new yum artifacts.
**/
export declare class ImportYumArtifactsRequest extends SpeakeasyBase {
    gcsSource?: ImportYumArtifactsGcsSource;
}
