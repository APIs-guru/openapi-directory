import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSettingValuesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=configId" })
  configId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;
}


export class GetSettingValuesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSettingValuesPathParams;
}


export class GetSettingValuesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  configSettingValuesModel?: shared.ConfigSettingValuesModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
