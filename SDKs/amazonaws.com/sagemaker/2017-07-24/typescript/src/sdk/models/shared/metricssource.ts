import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MetricsSource
/** 
 * <p/>
**/
export class MetricsSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContentDigest" })
  contentDigest?: string;

  @SpeakeasyMetadata({ data: "json, name=ContentType" })
  contentType: string;

  @SpeakeasyMetadata({ data: "json, name=S3Uri" })
  s3Uri: string;
}
