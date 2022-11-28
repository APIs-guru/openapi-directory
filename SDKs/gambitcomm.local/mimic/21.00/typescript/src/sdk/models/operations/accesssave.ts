import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccessSavePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=filename" })
  filename: string;
}


export class AccessSaveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AccessSavePathParams;
}


export class AccessSaveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  accessSave200ApplicationJsonStrings?: string[];
}
