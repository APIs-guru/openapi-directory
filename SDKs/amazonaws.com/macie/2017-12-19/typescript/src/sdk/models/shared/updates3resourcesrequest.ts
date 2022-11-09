import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { S3ResourceClassificationUpdate } from "./s3resourceclassificationupdate";


export class UpdateS3ResourcesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=memberAccountId" })
  memberAccountId?: string;

  @Metadata({ data: "json, name=s3ResourcesUpdate", elemType: shared.S3ResourceClassificationUpdate })
  s3ResourcesUpdate: S3ResourceClassificationUpdate[];
}
