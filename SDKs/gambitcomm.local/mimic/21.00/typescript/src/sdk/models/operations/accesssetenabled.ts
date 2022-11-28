import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccessSetEnabledPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enabledOrNot" })
  enabledOrNot: string;
}


export class AccessSetEnabledRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AccessSetEnabledPathParams;
}


export class AccessSetEnabledResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  accessSetEnabled200ApplicationJsonString?: string;
}
