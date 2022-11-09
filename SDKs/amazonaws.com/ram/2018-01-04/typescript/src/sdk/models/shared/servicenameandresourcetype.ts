import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ServiceNameAndResourceType
/** 
 * Information about the shareable resource types and the Amazon Web Services services to which they belong.
**/
export class ServiceNameAndResourceType extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceType" })
  resourceType?: string;

  @Metadata({ data: "json, name=serviceName" })
  serviceName?: string;
}
