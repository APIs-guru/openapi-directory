import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddOrUpdateIntegrationLinkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=integrationLinkType" })
  integrationLinkType: shared.IntegrationLinkTypeEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=key" })
  key: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=settingId" })
  settingId: number;
}


export class AddOrUpdateIntegrationLinkRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  addOrUpdateIntegrationLinkModel?: shared.AddOrUpdateIntegrationLinkModel;

  @Metadata({ data: "request, media_type=application/json" })
  addOrUpdateIntegrationLinkModel1?: shared.AddOrUpdateIntegrationLinkModel;

  @Metadata({ data: "request, media_type=text/json" })
  addOrUpdateIntegrationLinkModel2?: shared.AddOrUpdateIntegrationLinkModel;
}


export class AddOrUpdateIntegrationLinkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddOrUpdateIntegrationLinkPathParams;

  @Metadata()
  request?: AddOrUpdateIntegrationLinkRequests;
}


export class AddOrUpdateIntegrationLinkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  integrationLinkModel?: shared.IntegrationLinkModel;

  @Metadata()
  statusCode: number;
}
