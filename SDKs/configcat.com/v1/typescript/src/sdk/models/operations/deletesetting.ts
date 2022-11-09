import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteSettingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=settingId" })
  settingId: number;
}


export class DeleteSettingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteSettingPathParams;
}


export class DeleteSettingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
