import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposGetAppsWithAccessToProtectedBranchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=branch" })
  branch: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposGetAppsWithAccessToProtectedBranchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposGetAppsWithAccessToProtectedBranchPathParams;
}


export class ReposGetAppsWithAccessToProtectedBranchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  integrations?: Map<string, any>[];
}
