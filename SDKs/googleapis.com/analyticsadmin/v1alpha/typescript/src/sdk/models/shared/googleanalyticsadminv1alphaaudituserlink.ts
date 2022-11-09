import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAnalyticsAdminV1alphaAuditUserLink
/** 
 * Read-only resource used to summarize a principal's effective roles.
**/
export class GoogleAnalyticsAdminV1alphaAuditUserLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=directRoles" })
  directRoles?: string[];

  @Metadata({ data: "json, name=effectiveRoles" })
  effectiveRoles?: string[];

  @Metadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
