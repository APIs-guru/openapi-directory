import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ResolverDnssecValidationStatusEnum } from "./resolverdnssecvalidationstatusenum";
/**
 * A complex type that contains information about a configuration for DNSSEC validation.
**/
export declare class ResolverDnssecConfig extends SpeakeasyBase {
    id?: string;
    ownerId?: string;
    resourceId?: string;
    validationStatus?: ResolverDnssecValidationStatusEnum;
}
