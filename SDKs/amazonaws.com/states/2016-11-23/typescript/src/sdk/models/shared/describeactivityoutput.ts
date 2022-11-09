import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeActivityOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=activityArn" })
  activityArn: string;

  @Metadata({ data: "json, name=creationDate" })
  creationDate: Date;

  @Metadata({ data: "json, name=name" })
  name: string;
}
