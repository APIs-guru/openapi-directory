import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSettingValuesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=configId" })
  configId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;
}


export class GetSettingValuesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSettingValuesPathParams;
}


export class GetSettingValuesResponse extends SpeakeasyBase {
  @Metadata()
  configSettingValuesModel?: shared.ConfigSettingValuesModel;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
