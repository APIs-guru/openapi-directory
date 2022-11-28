import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReposDisableAutomatedSecurityFixesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposDisableAutomatedSecurityFixesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposDisableAutomatedSecurityFixesPathParams;
}


export class ReposDisableAutomatedSecurityFixesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
