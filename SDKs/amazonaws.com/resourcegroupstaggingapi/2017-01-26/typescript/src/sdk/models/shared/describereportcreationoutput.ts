import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeReportCreationOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=S3Location" })
  s3Location?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;
}
