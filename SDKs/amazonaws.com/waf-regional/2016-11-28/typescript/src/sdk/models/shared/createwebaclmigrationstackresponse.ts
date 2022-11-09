import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateWebAclMigrationStackResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=S3ObjectUrl" })
  s3ObjectUrl: string;
}
