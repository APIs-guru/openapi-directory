import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposGetAllEnvironmentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposGetAllEnvironmentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposGetAllEnvironmentsPathParams;
}


export class ReposGetAllEnvironments200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=environments", elemType: shared.Environment })
  environments?: shared.Environment[];

  @Metadata({ data: "json, name=total_count" })
  totalCount?: number;
}


export class ReposGetAllEnvironmentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  reposGetAllEnvironments200ApplicationJsonObject?: ReposGetAllEnvironments200ApplicationJson;
}
