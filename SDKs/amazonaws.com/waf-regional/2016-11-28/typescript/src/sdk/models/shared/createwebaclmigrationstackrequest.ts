import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateWebAclMigrationStackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IgnoreUnsupportedType" })
  ignoreUnsupportedType: boolean;

  @SpeakeasyMetadata({ data: "json, name=S3BucketName" })
  s3BucketName: string;

  @SpeakeasyMetadata({ data: "json, name=WebACLId" })
  webAclId: string;
}
