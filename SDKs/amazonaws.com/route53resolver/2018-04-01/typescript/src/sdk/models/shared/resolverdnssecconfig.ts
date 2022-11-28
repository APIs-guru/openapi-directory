import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResolverDnssecValidationStatusEnum } from "./resolverdnssecvalidationstatusenum";



// ResolverDnssecConfig
/** 
 * A complex type that contains information about a configuration for DNSSEC validation.
**/
export class ResolverDnssecConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=OwnerId" })
  ownerId?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=ValidationStatus" })
  validationStatus?: ResolverDnssecValidationStatusEnum;
}
