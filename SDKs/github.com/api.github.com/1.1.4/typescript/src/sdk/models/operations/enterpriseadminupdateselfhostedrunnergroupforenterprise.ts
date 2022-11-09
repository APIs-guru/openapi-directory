import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterprisePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=runner_group_id" })
  runnerGroupId: number;
}

export enum EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnum {
    Selected = "selected"
,    All = "all"
}


export class EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=visibility" })
  visibility?: EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnum;
}


export class EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterprisePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBody;
}


export class EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  runnerGroupsEnterprise?: shared.RunnerGroupsEnterprise;
}
