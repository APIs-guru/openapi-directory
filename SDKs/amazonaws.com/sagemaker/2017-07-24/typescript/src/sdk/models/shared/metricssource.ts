import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MetricsSource
/** 
 * <p/>
**/
export class MetricsSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContentDigest" })
  contentDigest?: string;

  @Metadata({ data: "json, name=ContentType" })
  contentType: string;

  @Metadata({ data: "json, name=S3Uri" })
  s3Uri: string;
}
