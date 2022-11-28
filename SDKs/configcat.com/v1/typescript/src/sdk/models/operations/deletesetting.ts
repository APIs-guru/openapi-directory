import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteSettingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=settingId" })
  settingId: number;
}


export class DeleteSettingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteSettingPathParams;
}


export class DeleteSettingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
