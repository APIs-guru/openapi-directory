import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceBucketAccessEnum } from "./resourcebucketaccessenum";



export class SetResourceAccessForBucketRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access" })
  access: ResourceBucketAccessEnum;

  @SpeakeasyMetadata({ data: "json, name=bucketName" })
  bucketName: string;

  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName: string;
}
