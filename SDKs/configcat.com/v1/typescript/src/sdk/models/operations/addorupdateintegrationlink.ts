import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddOrUpdateIntegrationLinkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=integrationLinkType" })
  integrationLinkType: shared.IntegrationLinkTypeEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=settingId" })
  settingId: number;
}


export class AddOrUpdateIntegrationLinkRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  addOrUpdateIntegrationLinkModel?: shared.AddOrUpdateIntegrationLinkModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  addOrUpdateIntegrationLinkModel1?: shared.AddOrUpdateIntegrationLinkModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  addOrUpdateIntegrationLinkModel2?: shared.AddOrUpdateIntegrationLinkModel;
}


export class AddOrUpdateIntegrationLinkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddOrUpdateIntegrationLinkPathParams;

  @SpeakeasyMetadata()
  request?: AddOrUpdateIntegrationLinkRequests;
}


export class AddOrUpdateIntegrationLinkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  integrationLinkModel?: shared.IntegrationLinkModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
