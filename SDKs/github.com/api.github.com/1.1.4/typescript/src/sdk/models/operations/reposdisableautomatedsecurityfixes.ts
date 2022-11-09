import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReposDisableAutomatedSecurityFixesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposDisableAutomatedSecurityFixesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposDisableAutomatedSecurityFixesPathParams;
}


export class ReposDisableAutomatedSecurityFixesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
