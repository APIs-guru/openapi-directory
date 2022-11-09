import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeApplicationSnapshotRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @Metadata({ data: "json, name=SnapshotName" })
  snapshotName: string;
}
