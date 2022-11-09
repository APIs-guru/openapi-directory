import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnterpriseAdminCreateSelfHostedRunnerGroupForEnterprisePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;
}

export enum EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnum {
    Selected = "selected"
,    All = "all"
}


export class EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=runners" })
  runners?: number[];

  @Metadata({ data: "json, name=selected_organization_ids" })
  selectedOrganizationIds?: number[];

  @Metadata({ data: "json, name=visibility" })
  visibility?: EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnum;
}


export class EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminCreateSelfHostedRunnerGroupForEnterprisePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBody;
}


export class EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  runnerGroupsEnterprise?: shared.RunnerGroupsEnterprise;
}
