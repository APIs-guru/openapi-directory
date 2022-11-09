import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AmpUrl } from "./ampurl";
import { AmpUrlError } from "./ampurlerror";
/**
 * Batch AMP URL response.
**/
export declare class BatchGetAmpUrlsResponse extends SpeakeasyBase {
    ampUrls?: AmpUrl[];
    urlErrors?: AmpUrlError[];
}
