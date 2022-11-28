import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3ResourceClassificationUpdate } from "./s3resourceclassificationupdate";



export class UpdateS3ResourcesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=memberAccountId" })
  memberAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=s3ResourcesUpdate", elemType: S3ResourceClassificationUpdate })
  s3ResourcesUpdate: S3ResourceClassificationUpdate[];
}
