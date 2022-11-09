import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudApigeeV1Reference
/** 
 * A Reference configuration. References must refer to a keystore that also exists in the parent environment.
**/
export class GoogleCloudApigeeV1Reference extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=refers" })
  refers?: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: string;
}
