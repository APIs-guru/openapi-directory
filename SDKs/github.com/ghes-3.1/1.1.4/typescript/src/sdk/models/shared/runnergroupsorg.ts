import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RunnerGroupsOrg extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allows_public_repositories" })
  allowsPublicRepositories: boolean;

  @SpeakeasyMetadata({ data: "json, name=default" })
  default: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=inherited" })
  inherited: boolean;

  @SpeakeasyMetadata({ data: "json, name=inherited_allows_public_repositories" })
  inheritedAllowsPublicRepositories?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=runners_url" })
  runnersUrl: string;

  @SpeakeasyMetadata({ data: "json, name=selected_repositories_url" })
  selectedRepositoriesUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=visibility" })
  visibility: string;
}
