import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnterpriseAdminDeleteSelfHostedRunnerFromEnterprisePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=runner_id" })
  runnerId: number;
}


export class EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminDeleteSelfHostedRunnerFromEnterprisePathParams;
}


export class EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
