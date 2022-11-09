import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReposDeleteAccessRestrictionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=branch" })
  branch: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposDeleteAccessRestrictionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposDeleteAccessRestrictionsPathParams;
}


export class ReposDeleteAccessRestrictionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
