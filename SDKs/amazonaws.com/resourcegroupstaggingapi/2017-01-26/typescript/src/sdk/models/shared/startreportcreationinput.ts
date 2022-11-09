import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartReportCreationInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=S3Bucket" })
  s3Bucket: string;
}
