import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3ResourceClassification } from "./s3resourceclassification";



export class ListS3ResourcesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=s3Resources", elemType: S3ResourceClassification })
  s3Resources?: S3ResourceClassification[];
}
