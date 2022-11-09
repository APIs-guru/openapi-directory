import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AccessSetEnabledPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=enabledOrNot" })
  enabledOrNot: string;
}


export class AccessSetEnabledRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AccessSetEnabledPathParams;
}


export class AccessSetEnabledResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  accessSetEnabled200ApplicationJsonString?: string;
}
