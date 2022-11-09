import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RunnerGroupsOrg extends SpeakeasyBase {
  @Metadata({ data: "json, name=allows_public_repositories" })
  allowsPublicRepositories: boolean;

  @Metadata({ data: "json, name=default" })
  default: boolean;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=inherited" })
  inherited: boolean;

  @Metadata({ data: "json, name=inherited_allows_public_repositories" })
  inheritedAllowsPublicRepositories?: boolean;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=runners_url" })
  runnersUrl: string;

  @Metadata({ data: "json, name=selected_repositories_url" })
  selectedRepositoriesUrl?: string;

  @Metadata({ data: "json, name=visibility" })
  visibility: string;
}
