import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResolverDnssecValidationStatusEnum } from "./resolverdnssecvalidationstatusenum";


// ResolverDnssecConfig
/** 
 * A complex type that contains information about a configuration for DNSSEC validation.
**/
export class ResolverDnssecConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=OwnerId" })
  ownerId?: string;

  @Metadata({ data: "json, name=ResourceId" })
  resourceId?: string;

  @Metadata({ data: "json, name=ValidationStatus" })
  validationStatus?: ResolverDnssecValidationStatusEnum;
}
