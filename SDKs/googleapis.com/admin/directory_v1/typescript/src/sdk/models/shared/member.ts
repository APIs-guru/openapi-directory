import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Member
/** 
 * A Google Groups member can be a user or another group. This member can be inside or outside of your account's domains. For more information about common group member tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-group-members).
**/
export class Member extends SpeakeasyBase {
  @Metadata({ data: "json, name=delivery_settings" })
  deliverySettings?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=role" })
  role?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
