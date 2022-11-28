import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeDrtAccessResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LogBucketList" })
  logBucketList?: string[];

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn?: string;
}
