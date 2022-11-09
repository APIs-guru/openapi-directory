import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { KeyRange } from "./keyrange";
import { TargetOnDeviceService } from "./targetondeviceservice";


// S3Resource
/** 
 * Each <code>S3Resource</code> object represents an Amazon S3 bucket that your transferred data will be exported from or imported into. For export jobs, this object can have an optional <code>KeyRange</code> value. The length of the range is defined at job creation, and has either an inclusive <code>BeginMarker</code>, an inclusive <code>EndMarker</code>, or both. Ranges are UTF-8 binary sorted.
**/
export class S3Resource extends SpeakeasyBase {
  @Metadata({ data: "json, name=BucketArn" })
  bucketArn?: string;

  @Metadata({ data: "json, name=KeyRange" })
  keyRange?: KeyRange;

  @Metadata({ data: "json, name=TargetOnDeviceServices", elemType: shared.TargetOnDeviceService })
  targetOnDeviceServices?: TargetOnDeviceService[];
}
