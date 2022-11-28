import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LabelingJobS3DataSource
/** 
 * The Amazon S3 location of the input data objects.
**/
export class LabelingJobS3DataSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ManifestS3Uri" })
  manifestS3Uri: string;
}
