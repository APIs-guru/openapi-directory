import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnterpriseAdminSetSelfHostedRunnersInGroupForEnterprisePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=runner_group_id" })
  runnerGroupId: number;
}


export class EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=runners" })
  runners: number[];
}


export class EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminSetSelfHostedRunnersInGroupForEnterprisePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequestBody;
}


export class EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
