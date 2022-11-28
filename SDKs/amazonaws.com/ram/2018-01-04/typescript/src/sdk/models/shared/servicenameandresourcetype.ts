import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ServiceNameAndResourceType
/** 
 * Information about the shareable resource types and the Amazon Web Services services to which they belong.
**/
export class ServiceNameAndResourceType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName?: string;
}
