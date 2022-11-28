import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReposEnableAutomatedSecurityFixesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposEnableAutomatedSecurityFixesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposEnableAutomatedSecurityFixesPathParams;
}


export class ReposEnableAutomatedSecurityFixesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
