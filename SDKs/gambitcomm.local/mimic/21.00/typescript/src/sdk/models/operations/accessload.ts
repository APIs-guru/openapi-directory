import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccessLoadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=filename" })
  filename: string;
}


export class AccessLoadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AccessLoadPathParams;
}


export class AccessLoadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  accessLoad200ApplicationJsonStrings?: string[];
}
