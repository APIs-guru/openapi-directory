import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AppsGetUserInstallationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class AppsGetUserInstallationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AppsGetUserInstallationPathParams;
}


export class AppsGetUserInstallationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  installation?: shared.Installation;
}
