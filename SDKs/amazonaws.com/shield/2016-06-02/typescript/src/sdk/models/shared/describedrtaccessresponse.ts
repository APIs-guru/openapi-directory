import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeDrtAccessResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=LogBucketList" })
  logBucketList?: string[];

  @Metadata({ data: "json, name=RoleArn" })
  roleArn?: string;
}
