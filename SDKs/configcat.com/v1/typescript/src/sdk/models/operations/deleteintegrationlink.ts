import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteIntegrationLinkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=integrationLinkType" })
  integrationLinkType: shared.IntegrationLinkTypeEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=settingId" })
  settingId: number;
}


export class DeleteIntegrationLinkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteIntegrationLinkPathParams;
}


export class DeleteIntegrationLinkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteIntegrationLinkModel?: shared.DeleteIntegrationLinkModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
