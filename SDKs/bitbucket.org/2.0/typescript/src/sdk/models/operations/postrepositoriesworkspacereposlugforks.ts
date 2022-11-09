import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostRepositoriesWorkspaceRepoSlugForksPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class PostRepositoriesWorkspaceRepoSlugForksSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostRepositoriesWorkspaceRepoSlugForksSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class PostRepositoriesWorkspaceRepoSlugForksSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PostRepositoriesWorkspaceRepoSlugForksSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostRepositoriesWorkspaceRepoSlugForksSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostRepositoriesWorkspaceRepoSlugForksSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: PostRepositoriesWorkspaceRepoSlugForksSecurityOption3;
}


export class PostRepositoriesWorkspaceRepoSlugForksRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRepositoriesWorkspaceRepoSlugForksPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: Map<string, any>;

  @Metadata()
  security: PostRepositoriesWorkspaceRepoSlugForksSecurity;
}


export class PostRepositoriesWorkspaceRepoSlugForksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  repository?: Map<string, any>;
}
