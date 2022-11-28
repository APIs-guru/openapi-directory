import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetIntegrationLinkDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=integrationLinkType" })
  integrationLinkType: shared.IntegrationLinkTypeEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=key" })
  key: string;
}


export class GetIntegrationLinkDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetIntegrationLinkDetailsPathParams;
}


export class GetIntegrationLinkDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  integrationLinkDetailsModel?: shared.IntegrationLinkDetailsModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
