import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnterpriseAdminCreateSelfHostedRunnerGroupForEnterprisePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;
}

export enum EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnum {
    Selected = "selected",
    All = "all"
}


export class EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=runners" })
  runners?: number[];

  @SpeakeasyMetadata({ data: "json, name=selected_organization_ids" })
  selectedOrganizationIds?: number[];

  @SpeakeasyMetadata({ data: "json, name=visibility" })
  visibility?: EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnum;
}


export class EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnterpriseAdminCreateSelfHostedRunnerGroupForEnterprisePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBody;
}


export class EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  runnerGroupsEnterprise?: shared.RunnerGroupsEnterprise;
}
