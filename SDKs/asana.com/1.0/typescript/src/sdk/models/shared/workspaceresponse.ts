import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WorkspaceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=email_domains" })
  emailDomains?: string[];

  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=is_organization" })
  isOrganization?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;
}
