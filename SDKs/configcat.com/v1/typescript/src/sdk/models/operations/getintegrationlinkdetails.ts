import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetIntegrationLinkDetailsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=integrationLinkType" })
  integrationLinkType: shared.IntegrationLinkTypeEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=key" })
  key: string;
}


export class GetIntegrationLinkDetailsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetIntegrationLinkDetailsPathParams;
}


export class GetIntegrationLinkDetailsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  integrationLinkDetailsModel?: shared.IntegrationLinkDetailsModel;

  @Metadata()
  statusCode: number;
}
