import { SpeakeasyBase } from "../../../internal/utils";
import { KeyRange } from "./keyrange";
import { TargetOnDeviceService } from "./targetondeviceservice";
/**
 * Each <code>S3Resource</code> object represents an Amazon S3 bucket that your transferred data will be exported from or imported into. For export jobs, this object can have an optional <code>KeyRange</code> value. The length of the range is defined at job creation, and has either an inclusive <code>BeginMarker</code>, an inclusive <code>EndMarker</code>, or both. Ranges are UTF-8 binary sorted.
**/
export declare class S3Resource extends SpeakeasyBase {
    bucketArn?: string;
    keyRange?: KeyRange;
    targetOnDeviceServices?: TargetOnDeviceService[];
}
