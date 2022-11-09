import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AccessLoadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=filename" })
  filename: string;
}


export class AccessLoadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AccessLoadPathParams;
}


export class AccessLoadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  accessLoad200ApplicationJsonStrings?: string[];
}
