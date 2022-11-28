import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Volumes mounted within the app container. Only applicable in the App Engine flexible environment.
**/
export declare class Volume extends SpeakeasyBase {
    name?: string;
    sizeGb?: number;
    volumeType?: string;
}
