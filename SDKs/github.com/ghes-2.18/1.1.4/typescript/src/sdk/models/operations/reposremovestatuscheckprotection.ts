import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReposRemoveStatusCheckProtectionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=branch" })
  branch: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposRemoveStatusCheckProtectionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposRemoveStatusCheckProtectionPathParams;
}


export class ReposRemoveStatusCheckProtectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
