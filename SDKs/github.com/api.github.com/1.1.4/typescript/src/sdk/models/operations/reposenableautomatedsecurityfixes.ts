import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReposEnableAutomatedSecurityFixesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposEnableAutomatedSecurityFixesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposEnableAutomatedSecurityFixesPathParams;
}


export class ReposEnableAutomatedSecurityFixesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
