import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposGetAllEnvironmentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposGetAllEnvironments200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environments", elemType: shared.Environment })
  environments?: shared.Environment[];

  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount?: number;
}


export class ReposGetAllEnvironmentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposGetAllEnvironmentsPathParams;
}


export class ReposGetAllEnvironmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  reposGetAllEnvironments200ApplicationJsonObject?: ReposGetAllEnvironments200ApplicationJson;
}
