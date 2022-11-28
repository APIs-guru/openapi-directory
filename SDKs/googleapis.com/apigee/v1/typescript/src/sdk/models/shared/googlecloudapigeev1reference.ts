import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudApigeeV1Reference
/** 
 * A Reference configuration. References must refer to a keystore that also exists in the parent environment.
**/
export class GoogleCloudApigeeV1Reference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=refers" })
  refers?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: string;
}
