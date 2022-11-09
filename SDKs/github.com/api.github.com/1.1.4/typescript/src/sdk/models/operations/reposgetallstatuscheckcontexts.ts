import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposGetAllStatusCheckContextsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=branch" })
  branch: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposGetAllStatusCheckContextsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposGetAllStatusCheckContextsPathParams;
}


export class ReposGetAllStatusCheckContextsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  reposGetAllStatusCheckContexts200ApplicationJsonStrings?: string[];
}
