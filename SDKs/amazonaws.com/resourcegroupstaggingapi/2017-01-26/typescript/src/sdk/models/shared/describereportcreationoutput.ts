import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeReportCreationOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=S3Location" })
  s3Location?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;
}
