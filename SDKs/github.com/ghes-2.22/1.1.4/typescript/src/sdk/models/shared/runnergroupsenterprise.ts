import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RunnerGroupsEnterprise extends SpeakeasyBase {
  @Metadata({ data: "json, name=allows_public_repositories" })
  allowsPublicRepositories: boolean;

  @Metadata({ data: "json, name=default" })
  default: boolean;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=runners_url" })
  runnersUrl: string;

  @Metadata({ data: "json, name=selected_organizations_url" })
  selectedOrganizationsUrl?: string;

  @Metadata({ data: "json, name=visibility" })
  visibility: string;
}
