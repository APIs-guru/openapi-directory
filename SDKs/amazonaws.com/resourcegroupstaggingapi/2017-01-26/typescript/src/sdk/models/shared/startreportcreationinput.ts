import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartReportCreationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=S3Bucket" })
  s3Bucket: string;
}
