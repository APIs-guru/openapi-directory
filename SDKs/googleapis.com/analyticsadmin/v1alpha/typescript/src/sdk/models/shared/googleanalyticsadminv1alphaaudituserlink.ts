import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAnalyticsAdminV1alphaAuditUserLink
/** 
 * Read-only resource used to summarize a principal's effective roles.
**/
export class GoogleAnalyticsAdminV1alphaAuditUserLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=directRoles" })
  directRoles?: string[];

  @SpeakeasyMetadata({ data: "json, name=effectiveRoles" })
  effectiveRoles?: string[];

  @SpeakeasyMetadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
