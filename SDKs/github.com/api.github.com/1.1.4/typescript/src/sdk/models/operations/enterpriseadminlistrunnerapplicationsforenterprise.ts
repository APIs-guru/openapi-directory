import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnterpriseAdminListRunnerApplicationsForEnterprisePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;
}


export class EnterpriseAdminListRunnerApplicationsForEnterpriseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminListRunnerApplicationsForEnterprisePathParams;
}


export class EnterpriseAdminListRunnerApplicationsForEnterpriseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.RunnerApplication })
  runnerApplications?: shared.RunnerApplication[];
}
