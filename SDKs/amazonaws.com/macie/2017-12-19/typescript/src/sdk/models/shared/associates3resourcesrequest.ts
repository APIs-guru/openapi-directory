import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3ResourceClassification } from "./s3resourceclassification";



export class AssociateS3ResourcesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=memberAccountId" })
  memberAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=s3Resources", elemType: S3ResourceClassification })
  s3Resources: S3ResourceClassification[];
}
