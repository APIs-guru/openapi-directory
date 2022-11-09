import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceBucketAccessEnum } from "./resourcebucketaccessenum";


export class SetResourceAccessForBucketRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=access" })
  access: ResourceBucketAccessEnum;

  @Metadata({ data: "json, name=bucketName" })
  bucketName: string;

  @Metadata({ data: "json, name=resourceName" })
  resourceName: string;
}
