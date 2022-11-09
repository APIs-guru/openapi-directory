import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AccessSavePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=filename" })
  filename: string;
}


export class AccessSaveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AccessSavePathParams;
}


export class AccessSaveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  accessSave200ApplicationJsonStrings?: string[];
}
