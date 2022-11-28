import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterprisePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=runner_group_id" })
  runnerGroupId: number;
}

export enum EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnum {
    Selected = "selected",
    All = "all"
}


export class EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=visibility" })
  visibility?: EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnum;
}


export class EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterprisePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBody;
}


export class EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  runnerGroupsEnterprise?: shared.RunnerGroupsEnterprise;
}
