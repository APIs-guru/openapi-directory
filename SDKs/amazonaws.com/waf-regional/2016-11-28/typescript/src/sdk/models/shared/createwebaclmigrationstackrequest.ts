import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateWebAclMigrationStackRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=IgnoreUnsupportedType" })
  ignoreUnsupportedType: boolean;

  @Metadata({ data: "json, name=S3BucketName" })
  s3BucketName: string;

  @Metadata({ data: "json, name=WebACLId" })
  webAclId: string;
}
